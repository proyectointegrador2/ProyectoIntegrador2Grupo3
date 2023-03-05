﻿using DB.Data.Entities;
using DB.Data.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Context;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Entities;
using SistemaDeInventarioDeVentaDeVehiculos.Utils;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Transactions;
using TokenValidationResult = SistemaDeInventarioDeVentaDeVehiculos.Utils.TokenValidationResult;

namespace SistemaDeInventarioDeVentaDeVehiculos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleController : Controller
    {
        private readonly CarDbContext _context;
        private readonly JsonSerializerOptions jsonOptions = new JsonSerializerOptions
        {
            ReferenceHandler = ReferenceHandler.Preserve
        };

        public SaleController(CarDbContext context)
        {
            _context = context;
        }

        //Post: create sale (admin) 
        [HttpPost("admin/create")]
        public async Task<ActionResult> CreateSale([FromBody] RequestSale request)
        {
            using IDbContextTransaction transaction = _context.Database.BeginTransaction();
            try
            {
                var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
                if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

                var tokenValidation = TokenValidationResult.Verify(httpHeader);
                if (!tokenValidation.success) return BadRequest(tokenValidation);

                if (tokenValidation.dataSession == null) return NotFound();
                if (tokenValidation.dataSession.role != "admin") return BadRequest(new OperationResult("No autorizado", false));

                var productList = request.ProductList;
                if (productList == null || productList.Length == 0) return BadRequest(new OperationResult("No hay productos ordenados", false));

                var client = await _context.Clients.FindAsync(request.ClientId);
                if (client == null) return NotFound();

                Sale sale = new();
                decimal subTotal = 0;
                sale.ClientID = client.Id;
                sale.MetodoPago = request.PaymentMethod;

                await _context.Sales.AddAsync(sale);
                await _context.SaveChangesAsync();

                foreach (ProductCart productCart in productList)
                {
                    SaleDetails saleResults = new();
                    int CarID = productCart.ProductID;
                    int Cantidad = productCart.Cantidad;
                    var car = _context.Cars.FirstOrDefault(c => c.Id == CarID);
                    if (car == null) throw new Exception("Ha ocurrido un error, contacte con el soporte.");
                    decimal PrecioUnidad = car.Precio;

                    //reduce product stock 
                    if (car.Stock < Cantidad) return BadRequest(new OperationResult("no hay stocks suficientes para la cantidad solicitada", false));
                    car.Stock -= Cantidad;
                    _context.Entry(car).State = EntityState.Modified;

                    SaleDetails saleDetails = new() { SaleID = sale.ID, CarID = CarID, CantidadVendida = Cantidad, PrecioUnidad = PrecioUnidad };
                    saleDetails.SetSubTotal();
                    await _context.SalesDetails.AddAsync(saleDetails);
                    subTotal += saleDetails.SubTotal;
                };

                sale.Total = subTotal;
                sale.ClientID = client.Id;
                sale.MetodoPago = request.PaymentMethod;

                _context.Entry(sale).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                transaction.Commit();
                return Ok(new OperationResult("Venta Añadida con exito!", true));
            }
            catch
            {
                transaction.Rollback();
                return StatusCode(500);
            }
        }

        // POST: SaleController
        [HttpPost]
        public async Task<ActionResult> ProccessOrder([FromBody] Order order)
        {
            using IDbContextTransaction transaction = _context.Database.BeginTransaction();
            try
            {
                var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
                if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

                var tokenValidation = TokenValidationResult.Verify(httpHeader);
                if (!tokenValidation.success) return BadRequest(tokenValidation);

                var productList = order.ProductList;
                if (productList == null || productList.Length == 0) return BadRequest(new OperationResult("No hay productos ordenados", false));

                if (tokenValidation.dataSession == null) return NotFound();
                var email = tokenValidation.dataSession.email;

                User user = _context.Users.First(u => u.Correo == email);
                Client? client = CreateClient(user, order.Direccion, order.Telefono);

                if (client == null)
                {
                    client = _context.Clients.FirstOrDefault(c => c.Correo == email);
                    if (client == null) return NotFound("Cliente no encontrado");
                }

                Sale sale = new();
                decimal subTotal = 0;
                sale.ClientID = client.Id;
                sale.MetodoPago = order.PaymentMethod;

                await _context.Sales.AddAsync(sale);
                await _context.SaveChangesAsync();

                foreach (ProductCart productCart in productList)
                {
                    SaleDetails saleResults = new();
                    int CarID = productCart.ProductID;
                    int Cantidad = productCart.Cantidad;
                    var car = _context.Cars.FirstOrDefault(c => c.Id == CarID);
                    if (car == null) throw new Exception("Ha ocurrido un error, contacte con el soporte.");
                    decimal PrecioUnidad = car.Precio;

                    //reduce product stock 
                    if (car.Stock < Cantidad) return BadRequest(new OperationResult("no hay stocks suficientes para la cantidad solicitada", false));
                    car.Stock-= Cantidad;
                    _context.Entry(car).State = EntityState.Modified;

                    //Create saleDetails and add subTotal
                    SaleDetails saleDetails = new() { SaleID = sale.ID, CarID = CarID, CantidadVendida = Cantidad, PrecioUnidad = PrecioUnidad };
                    saleDetails.SetSubTotal();
                    await _context.SalesDetails.AddAsync(saleDetails);
                    subTotal += saleDetails.SubTotal;
                };

                sale.Total = subTotal;

                _context.Entry(sale).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                transaction.Commit();
                return Ok(new OperationResult("Orden completada con exito!", true));
            }
            catch
            {
                transaction.Rollback();
                return StatusCode(500);
            }
        }

        //GET: get current order details
        [HttpGet("{id}")]
        public ActionResult GetOrders(int id)
        {
            try 
            {
                var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
                if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

                var tokenValidation = TokenValidationResult.Verify(httpHeader);
                if (!tokenValidation.success) return BadRequest(tokenValidation);
                if (tokenValidation.dataSession == null) return NotFound();

                Sale? sale;
                Client? currentClient;

                if(tokenValidation.dataSession.role == "admin")
                {
                    sale = _context.Sales.FirstOrDefault(s => s.ID == id);
                    if (sale == null) return NotFound();
                    currentClient = _context.Clients.FirstOrDefault(c => c.Id == sale.ClientID);
                }
                else
                {
                    var email = tokenValidation.dataSession.email;
                    currentClient = _context.Clients.FirstOrDefault(c => c.Correo == email);
                    if (currentClient == null) return NotFound();
                    sale = _context.Sales.FirstOrDefault(s => s.ClientID == currentClient.Id && s.ID == id);
                }
                
                if(sale == null) return NotFound();

                var salesDetails = _context.SalesDetails.Where(sd => sd.SaleID == sale.ID).ToList();

                var results = new { details = salesDetails, orderSummary = sale, client = currentClient, success = true };

                var json = JsonSerializer.Serialize(results, jsonOptions);

                return Ok(json);
            }

            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        //GET: get orders (administrator)
        [HttpGet("admin")]
        public ActionResult GetOrdersInAdministratorView()
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success) return BadRequest(tokenValidation);
            if (tokenValidation.dataSession == null) return NotFound();
            if (tokenValidation.dataSession.role != "admin") return BadRequest(new OperationResult("No autorizado", false));

            var sales = _context.Sales.Include(s => s.Client).Include(s => s.SalesDetails).ToList();

            var json = JsonSerializer.Serialize(sales, jsonOptions);
            return Ok(json);
        }

        //GET: get orders (current user)
        [HttpGet]
        public async Task<ActionResult> GetOrders()
        {
            try
            {
                var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
                if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

                var tokenValidation = TokenValidationResult.Verify(httpHeader);
                if (!tokenValidation.success) return BadRequest(tokenValidation);
                if (tokenValidation.dataSession == null) return NotFound();

                var email = tokenValidation.dataSession.email;
                var currentClient = _context.Clients.FirstOrDefault(c => c.Correo == email);
                if (currentClient == null) return NotFound();

                var sales = await _context.Sales.Include(s => s.Client).Include(s => s.SalesDetails).Where(s => s.ClientID == currentClient.Id).ToListAsync();

                var json = JsonSerializer.Serialize(sales, jsonOptions);
                return Ok(json);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        public Client? CreateClient(User user, string address, string phone)
        {
            bool clientExist = _context.Clients.Any(c => c.Correo == user.Correo);
            if (!clientExist)
            {
                Client client;
                if(!string.IsNullOrEmpty(address) && !string.IsNullOrEmpty(phone))
                {
                    client = new()
                    {
                        Nombre = user.Nombre,
                        Apellido = user.Apellido,
                        Correo = user.Correo,
                        Direccion = address,
                        Telefono = phone,
                    };
                }
                else if (!string.IsNullOrEmpty(user.Direccion) && !string.IsNullOrEmpty(user.Telefono)) 
                {
                    client = new()
                    {
                        Nombre = user.Nombre,
                        Apellido = user.Apellido,
                        Correo = user.Correo,
                        Direccion = user.Direccion,
                        Telefono = user.Telefono,
                    };
                }
                else return null;

                _context.Clients.Add(client);
                _context.SaveChanges();

                return client;
            }
            return null;
        }

    }
}

using DB.Data.Entities;
using DB.Data.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Context;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Entities;
using SistemaDeInventarioDeVentaDeVehiculos.Utils;
using System.Collections.Generic;
using System.Transactions;
using TokenValidationResult = SistemaDeInventarioDeVentaDeVehiculos.Utils.TokenValidationResult;

namespace SistemaDeInventarioDeVentaDeVehiculos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleController : Controller
    {
        private readonly CarDbContext _context;
        public SaleController(CarDbContext context)
        {
            _context = context;
        }

        //Post: create sale (admin)
        [HttpPost("admin/create")]
        [ValidateAntiForgeryToken]
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

                foreach (ProductCart productCart in productList)
                {
                    SaleDetails saleResults = new();
                    int CarID = productCart.ProductID;
                    int CantidadVendida = productCart.Cantidad;
                    decimal PrecioUnidad = productCart.PrecioUnidad;

                    if (!_context.Cars.Any(c => c.Id == CarID)) throw new Exception("Ha ocurrido un error, contacte con el soporte.");

                    SaleDetails saleDetails = new() { SaleID = sale.ID, CarID = CarID, CantidadVendida = CantidadVendida, PrecioUnidad = PrecioUnidad };
                    await _context.SalesDetails.AddAsync(saleDetails);
                    subTotal += saleDetails.SubTotal;
                };

                sale.Total = subTotal;
                sale.ClientID = client.Id;
                sale.MetodoPago = request.PaymentMethod;

                await _context.Sales.AddAsync(sale);
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
        [ValidateAntiForgeryToken]
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
                var client = CreateClient(user);

                if (client == null)
                {
                    client = _context.Clients.FirstOrDefault(c => c.Correo == email);
                    if (client == null) return NotFound();
                }

                Sale sale = new();
                decimal subTotal = 0;

                foreach (ProductCart productCart in productList)
                {
                    SaleDetails saleResults = new();
                    int CarID = productCart.ProductID;
                    int CantidadVendida = productCart.Cantidad;
                    decimal PrecioUnidad = productCart.PrecioUnidad;

                    if (!_context.Cars.Any(c => c.Id == CarID)) throw new Exception("Ha ocurrido un error, contacte con el soporte.");

                    SaleDetails saleDetails = new() { SaleID = sale.ID, CarID = CarID, CantidadVendida = CantidadVendida, PrecioUnidad = PrecioUnidad };
                    await _context.SalesDetails.AddAsync(saleDetails);
                    subTotal += saleDetails.SubTotal;
                };

                sale.Total = subTotal;
                sale.ClientID = client.Id;
                sale.MetodoPago = order.PaymentMethod;

                await _context.Sales.AddAsync(sale);
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
        [ValidateAntiForgeryToken]
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

                if(tokenValidation.dataSession.role == "admin")
                {
                    sale = _context.Sales.FirstOrDefault(s => s.ID == id);
                }
                else
                {
                    var email = tokenValidation.dataSession.email;
                    var currentClient = _context.Clients.FirstOrDefault(c => c.Correo == email);
                    if (currentClient == null) return NotFound();
                    sale = _context.Sales.FirstOrDefault(s => s.ClientID == currentClient.Id && s.ID == id);
                }
                
                if(sale == null) return NotFound();

                var salesDetails = _context.SalesDetails.Where(sd => sd.SaleID == sale.ID).ToList();
           
                return Ok(new {details = salesDetails, orderSummary = sale, success = true});
            }

            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        //GET: get orders (administrator)
        [HttpGet("admin")]
        [ValidateAntiForgeryToken]
        public ActionResult GetOrdersInAdministratorView()
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success) return BadRequest(tokenValidation);
            if (tokenValidation.dataSession == null) return NotFound();
            if (tokenValidation.dataSession.role != "admin") return BadRequest(new OperationResult("No autorizado", false));

            var sales = _context.Sales.ToList();

            return Ok(sales);
        }

        //GET: get orders (current user)
        [HttpGet]
        [ValidateAntiForgeryToken]
        public ActionResult GetOrders()
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

                var sales = _context.Sales.Where(s => s.ClientID == currentClient.Id).ToList();

                return Ok(sales);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        public Client? CreateClient(User user)
        {
            bool clientExist = _context.Clients.Any(c => c.Correo == user.Correo);
            if (!clientExist)
            {

                if(!string.IsNullOrEmpty(user.Direccion) && !string.IsNullOrEmpty(user.Telefono))
                {
                    Client client = new() 
                    { 
                        Nombre = user.Nombre, 
                        Apellido = user.Apellido, 
                        Correo = user.Correo,
                        Direccion = user.Direccion,
                        Telefono = user.Telefono,
                    };

                    _context.Clients.Add(client);
                    _context.SaveChanges();

                    return client;
                }

                return null;
            }
            return null;
        }
    }
}

﻿using DB.Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Context;
using SistemaDeInventarioDeVentaDeVehiculos.Utils;

namespace SistemaDeInventarioDeVentaDeVehiculos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : Controller
    {
        private readonly CarDbContext _context;

        public CartController(CarDbContext context)
        {
            _context = context;
        }

        // POST: api/<CarController> Add Product to Cart
        [HttpPost]
        public async Task<IActionResult> AddToCart([FromBody] ProductCart product)
        {
            try
            {
                var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();

                if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

                var tokenValidation = TokenValidationResult.Verify(httpHeader);
                if (!tokenValidation.success) return BadRequest(tokenValidation);

                var car = await _context.Cars.FindAsync(product.ProductID);
                if (car == null) return BadRequest(new OperationResult("Producto no encontrado", false));

                if(car.Stock >= product.Cantidad  && car.Precio > 0)
                {
                    return Ok(new OperationResult("Producto añadido al carrito!", true));
                }

                return BadRequest(new OperationResult("Este producto no tiene stocks disponible", false));
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }
    }
}

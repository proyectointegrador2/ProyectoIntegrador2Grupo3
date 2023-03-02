using DB.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Context;
using SistemaDeInventarioDeVentaDeVehiculos.Utils;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SistemaDeInventarioDeVentaDeVehiculos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly CarDbContext _context;

        public CarController(CarDbContext context)
        {
            _context = context;
        }

        // GET: api/<CarController>
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success) return BadRequest(tokenValidation);

            var cars = await _context.Cars.ToListAsync();

            if (tokenValidation.dataSession != null && tokenValidation.dataSession.role == "admin")
            {
                return Ok(cars);
            }
            else
            {
                return NotFound();
            }
        }

        // GET api/<CarController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCarByIdAsync(int id)
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();

            if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success) return BadRequest(tokenValidation);

            if (tokenValidation.dataSession != null && tokenValidation.dataSession.role == "admin")
            {
                bool carExist = _context.Cars.Any(c => c.Id == id);

                if (carExist)
                {
                    var car = await _context.Cars.FindAsync(id);

                    if (car == null) return NotFound();

                    return Ok(new { success = true, car });
                }

                else return NotFound();
            }

            return StatusCode(403);
        }

        public async Task<IActionResult> GetCarsByBrandIdAsync(int id)
        {
            //TODO

            return Ok();
        }

        public async Task<IActionResult> GetCarsByModelIdAsync(int id)
        {
            //TODO

            return Ok();
        }

        // POST api/<CarController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            //TODO
        }

        // PUT api/<CarController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            //TODO
        }

        // DELETE api/<CarController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //TODO
        }
    }
}

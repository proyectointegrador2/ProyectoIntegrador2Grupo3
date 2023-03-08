using DB.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Context;
using SistemaDeInventarioDeVentaDeVehiculos.Utils;
using System.Text.Json;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SistemaDeInventarioDeVentaDeVehiculos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly CarDbContext _context;

        private readonly JsonSerializerOptions jsonOptions = new JsonSerializerOptions
        {
            ReferenceHandler = ReferenceHandler.Preserve
        };

        public CarController(CarDbContext context)
        {
            _context = context;
        }

        // GET: api/<CarController>
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            try
            {
                var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
                if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

                var tokenValidation = TokenValidationResult.Verify(httpHeader);
                if (!tokenValidation.success) return BadRequest(tokenValidation);

                var cars = await _context.Cars.ToListAsync();

                if (tokenValidation.dataSession != null)
                {
                    var json = JsonSerializer.Serialize(cars, jsonOptions);

                    return Ok(cars);
                }
                else
                {
                    return NotFound();
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
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

            if (tokenValidation.dataSession != null)
            {
                bool carExist = _context.Cars.Any(c => c.Id == id);

                if (carExist)
                {
                    #pragma warning disable CS8602
                    var car = await _context.Cars.Include(c => c.Model.Brand).FirstOrDefaultAsync(c => c.Id == id);

                    var json = JsonSerializer.Serialize(car, jsonOptions);

                    if (car == null) return NotFound();

                    return Ok(new { success = true, data = json });
                }

                else return NotFound();
            }

            return StatusCode(403);
        }

        // POST api/<CarController> Create Car
        [HttpPost]
        public async Task<IActionResult> CreateCar([FromBody] Car car)
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();

            if (httpHeader == null)
            {
                return BadRequest(new OperationResult("No autorizado", false));
            }

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success)
            {
                return BadRequest(tokenValidation);
            }

            if (tokenValidation.dataSession != null && tokenValidation.dataSession.role == "admin")
            {
                if (car == null)
                {
                    return BadRequest(new OperationResult("Datos enviados invalidos", false));
                }

                bool modelExist = await _context.Models.AnyAsync(m => m.Id == car.ModelID);
                if (!modelExist) return BadRequest(new OperationResult("Id del modelo no existe", false));

                bool chasisExist = await _context.Cars.AnyAsync(c => c.Chasis == car.Chasis);
                if (chasisExist) return BadRequest(new OperationResult("codigo de chasis ya existe", false));

                bool placaExist = await _context.Cars.AnyAsync(c => c.Placa == car.Placa);
                if (placaExist) return BadRequest(new OperationResult("Placa del vehiculo ya existe", false));


                _context.Cars.Add(car);
                await _context.SaveChangesAsync();

                return Ok(new OperationResult("Carro añadido Correctamente!", true));
            }

            return StatusCode(403);
        }


        // PUT api/<ModelController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> EditCar(int id, [FromBody] Car car)
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();

            if (httpHeader == null)
            {
                return BadRequest(new OperationResult("No autorizado", false));
            }

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success)
            {
                return BadRequest(tokenValidation);
            }

            if (tokenValidation.dataSession != null && tokenValidation.dataSession.role == "admin")
            {
                if (car == null)
                {
                    return BadRequest(new OperationResult("Datos enviados invalidos", false));
                }

                Car? originalCar = await _context.Cars.FirstOrDefaultAsync(c => c.Id == id);

                if(originalCar == null){
                    return NotFound();
                }

                _context.Entry(originalCar).State = EntityState.Detached;

                bool modelExist = await _context.Models.AnyAsync(m => m.Id == car.ModelID);
                if (!modelExist) return BadRequest(new OperationResult("Id del modelo no existe", false));

                bool chasisExist = await _context.Cars.AnyAsync(c => c.Chasis == car.Chasis);
                if (originalCar.Chasis != car.Chasis && chasisExist) return BadRequest(new OperationResult("codigo de chasis ya existe", false));

                bool placaExist = await _context.Cars.AnyAsync(c => c.Placa == car.Placa);
                if (originalCar.Placa != car.Placa && placaExist) return BadRequest(new OperationResult("Placa del vehiculo ya existe", false));

                try
                {
                    car.Id = id;
                    _context.Entry(car).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return Ok(new OperationResult("Carro modificado correctamente!", true));
                }
                catch (Exception)
                {
                    return StatusCode(500);
                }
            }
            return StatusCode(403);
        }

        // DELETE api/<CarController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();

            if (httpHeader == null)
            {
                return BadRequest(new OperationResult("No autorizado", false));
            }

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success)
            {
                return BadRequest(tokenValidation);
            }
                
            if (tokenValidation.dataSession != null && tokenValidation.dataSession.role == "admin")
            {
                var car = await _context.Cars.FindAsync(id);

                if (car == null)
                {
                    return NotFound();
                }

                try
                {
                    _context.Cars.Remove(car);
                    await _context.SaveChangesAsync();

                    return Ok(new OperationResult("Coche eliminado correctamente!", true));
                }catch(Exception)
                {
                    return StatusCode(500);
                }
            }

            return StatusCode(403);
        }
    }
}

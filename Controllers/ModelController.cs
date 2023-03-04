﻿using DB.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaDeInventarioDeVentaDeVehiculos.Data.Context;
using SistemaDeInventarioDeVentaDeVehiculos.Utils;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SistemaDeInventarioDeVentaDeVehiculos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModelController : ControllerBase
    {
        private readonly CarDbContext _context;

        public ModelController(CarDbContext context)
        {
            _context = context;
        }

        // GET: api/<MarcaController>
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success) return BadRequest(tokenValidation);

            var models = await _context.Models.ToListAsync();

            if (tokenValidation.dataSession != null && tokenValidation.dataSession.role == "admin")
            {
                return Ok(models);
            }
            else
            {
                return NotFound();
            }
        }

        // GET api/<ModelController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetModelByIdAsync(int id)
        {
            var httpHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();

            if (httpHeader == null) return BadRequest(new OperationResult("No autorizado", false));

            var tokenValidation = TokenValidationResult.Verify(httpHeader);
            if (!tokenValidation.success) return BadRequest(tokenValidation);

            if (tokenValidation.dataSession != null && tokenValidation.dataSession.role == "admin")
            {
                bool modelExist = _context.Models.Any(c => c.Id == id);

                if (modelExist)
                {
                    var model = await _context.Models.FindAsync(id);

                    if (model == null) return NotFound();

                    return Ok(new { success = true, model });
                }

                else return NotFound();
            }

            return StatusCode(403);
        }

        // POST api/<ModelController> Create Model
        [HttpPost]
        public async Task<IActionResult> CreateModel([FromBody] Model model)
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
                if (model == null)
                {
                    return BadRequest(new OperationResult("Datos enviados invalidos", false));
                }

                bool brandExist = await _context.Brands.AnyAsync(b => b.Id == model.BrandID);
                var modelIsRegistered = await _context.Models.AnyAsync(m => m.Nombre == model.Nombre);

                if (!brandExist) return BadRequest(new OperationResult("Id de marca no existe", false));
                
                if (modelIsRegistered) return BadRequest(new OperationResult("El modelo ya existe", false));

                _context.Models.Add(model);
                await _context.SaveChangesAsync();

                return Ok(new OperationResult("Modelo agregado Correctamente!", true));
            }

            return StatusCode(403);
        }


        // PUT api/<ModelController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> EditModel(int id, [FromBody] Model model)
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
                if (model == null)
                {
                    return BadRequest(new OperationResult("Datos enviados invalidos", false));
                }

                bool brandExist = await _context.Brands.AnyAsync(b => b.Id == model.BrandID);
                bool modelExist = await _context.Models.AnyAsync(m => m.Id == id);

                if (brandExist) return BadRequest(new OperationResult("Id de marca no existe", false));

                if (modelExist)
                {
                    model.Id = id;

                    _context.Entry(model).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                        return Ok(new OperationResult("Modelo modificado correctamente!", true));
                    }
                    catch (Exception)
                    {
                        return StatusCode(500);
                    }
                }
                else
                {
                    return NotFound();
                }
            }

            return StatusCode(403);
        }

        // DELETE api/<ModelController>/5
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
                var model = await _context.Models.FindAsync(id);

                if (model == null)
                {
                    return NotFound();
                }

                _context.Models.Remove(model);
                await _context.SaveChangesAsync();

                return Ok(new OperationResult("Modelo eliminado correctamente!", true));
            }

            return StatusCode(403);
        }
    }
}

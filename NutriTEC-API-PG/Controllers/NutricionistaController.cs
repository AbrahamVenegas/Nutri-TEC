using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Nutricionista")]
    public class NutricionistaController : ControllerBase
    {
        private readonly PostgresContext _context;

        public NutricionistaController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Nutricionistum>>> Get()
        {
            return Ok(await _context.Nutricionista.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Nutri")]
        public async Task<ActionResult<List<Nutricionistum>>> Get(int cedula_nutri)
        {
            var dbNutricionista = await _context.Nutricionista.FindAsync(cedula_nutri);
            if (dbNutricionista == null)
            {
                return BadRequest("Nutricionista no encontrado");
            }
            return Ok(dbNutricionista);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Nutricionistum>>> Post(Nutricionistum nutricionista)
        {
            _context.Nutricionista.Add(nutricionista);
            await _context.SaveChangesAsync();
            return Ok(await _context.Nutricionista.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<Nutricionistum>>> Put(Nutricionistum request)
        {
            var dbNutricionista = await _context.Nutricionista.FindAsync(request.Cedula);
            if (dbNutricionista == null)
            {
                return BadRequest("Nutricionista no encontrado");
            }

            dbNutricionista.Nombre = request.Nombre;
            dbNutricionista.Apellido1 = request.Apellido1;
            dbNutricionista.Apellido2 = request.Apellido2;
            dbNutricionista.Edad = request.Edad;
            dbNutricionista.FechaNacimiento = request.FechaNacimiento;
            dbNutricionista.Peso = request.Peso;
            dbNutricionista.Imc = request.Imc;
            dbNutricionista.Direccion = request.Direccion;
            //dbNutricionista.Foto = request.Foto;
            dbNutricionista.Tarjeta = request.Tarjeta;
            dbNutricionista.Tipocobro = request.Tipocobro;
            dbNutricionista.Tipocobro = request.Tipocobro;
            dbNutricionista.Password = request.Password;

            await _context.SaveChangesAsync();

            return Ok(await _context.Nutricionista.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<Nutricionistum>>> Delete(int cedula)
        {
            var dbNutricionista = await _context.Nutricionista.FindAsync(cedula);
            if (dbNutricionista == null)
            {
                return BadRequest("Nutricionista no encontrado");
            }
            _context.Nutricionista.Remove(dbNutricionista);
            await _context.SaveChangesAsync();

            return Ok(await _context.Nutricionista.ToListAsync());
        }

    }
}


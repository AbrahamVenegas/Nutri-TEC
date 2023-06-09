using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Consumo")]
    public class ConsumoController : ControllerBase
    {
        private readonly PostgresContext _context;

        public ConsumoController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Consumo>>> Get()
        {
            return Ok(await _context.Consumos.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Cliente")]
        public async Task<ActionResult<List<Consumo>>> Get(int id_cliente)
        {
            var dbConsumo = await _context.Consumos.FindAsync(id_cliente);
            if (dbConsumo == null)
            {
                return BadRequest("Cliente no encontrado");
            }
            return Ok(dbConsumo);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Consumo>>> Post(Consumo cliente)
        {
            _context.Consumos.Add(cliente);
            await _context.SaveChangesAsync();
            return Ok(await _context.Consumos.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<Consumo>>> Delete(int id_cliente, String fecha)
        {
            var dbConsumo = await _context.Consumos.FindAsync(id_cliente, fecha);
            if (dbConsumo == null)
            {
                return BadRequest("Consumo no encontrado");
            }
            _context.Consumos.Remove(dbConsumo);
            await _context.SaveChangesAsync();

            return Ok(await _context.Consumos.ToListAsync());
        }

    }
}
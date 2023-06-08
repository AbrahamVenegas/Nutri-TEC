using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Direccion")]
    public class DireccionController : ControllerBase
    {
        private readonly PostgresContext _context;

        public DireccionController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Direccion>>> Get()
        {
            return Ok(await _context.Direccions.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Direccion")]
        public async Task<ActionResult<List<Direccion>>> Get(int id)
        {
            var dbDireccion = await _context.Direccions.FindAsync(id);
            if (dbDireccion == null)
            {
                return BadRequest("Direccion no encontrada");
            }
            return Ok(dbDireccion);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Direccion>>> Post(Direccion direccion)
        {
            _context.Direccions.Add(direccion);
            await _context.SaveChangesAsync();
            return Ok(await _context.Direccions.ToListAsync());
        }
    }
}

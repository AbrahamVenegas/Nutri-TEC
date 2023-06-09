using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Medidas")]
    public class MedidasController : ControllerBase
    {
        private readonly PostgresContext _context;

        public MedidasController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Medida>>> Get()
        {
            return Ok(await _context.Medidas.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Medidas")]
        public async Task<ActionResult<List<Medida>>> Get(int id_cliente)
        {
            var dbCliente = await _context.Medidas.Where(a => a.IdCliente == id_cliente).ToListAsync();
            if (dbCliente == null)
            {
                return BadRequest("Medidas no encontradas");
            }
            return Ok(dbCliente);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Medida>>> Post(Medida medida)
        {
            _context.Medidas.Add(medida);
            await _context.SaveChangesAsync();
            return Ok(await _context.Medidas.ToListAsync());
        }
    }
}

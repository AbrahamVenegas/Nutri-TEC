using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Receta")]
    public class RecetaController : ControllerBase
    {
        private readonly PostgresContext _context;

        public RecetaController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Recetum>>> Get()
        {
            return Ok(await _context.Receta.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Receta")]
        public async Task<ActionResult<List<Recetum>>> Get(int id_receta)
        {
            var dbReceta = await _context.Receta.FindAsync(id_receta);
            if (dbReceta == null)
            {
                return BadRequest("Receta no encontrada");
            }
            return Ok(dbReceta);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Recetum>>> Post(Recetum receta)
        {
            _context.Receta.Add(receta);
            await _context.SaveChangesAsync();
            return Ok(await _context.Receta.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<Recetum>>> Put(Recetum request)
        {
            var dbReceta = await _context.Receta.FindAsync(request.Id);
            if (dbReceta == null)
            {
                return BadRequest("Receta no encontrada");
            }

            dbReceta.Nombrereceta = request.Nombrereceta;

            await _context.SaveChangesAsync();

            return Ok(await _context.Receta.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<Recetum>>> Delete(int id_receta)
        {
            var dbReceta = await _context.Receta.FindAsync(id_receta);
            if (dbReceta == null)
            {
                return BadRequest("Receta no encontrada");
            }
            _context.Receta.Remove(dbReceta);
            await _context.SaveChangesAsync();

            return Ok(await _context.Receta.ToListAsync());
        }
    }
}

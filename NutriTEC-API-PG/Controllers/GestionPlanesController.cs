using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/GestionPlanes")]
    public class GestionPlanesController : ControllerBase
    {
        private readonly PostgresContext _context;

        public GestionPlanesController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<GestionPlane>>> Get()
        {
            return Ok(await _context.GestionPlanes.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_GestionPlanes")]
        public async Task<ActionResult<List<GestionPlane>>> Get(int id_plan)
        {
            var dbGestionPlanes = await _context.GestionPlanes.FindAsync(id_plan);
            if (dbGestionPlanes == null)
            {
                return BadRequest("Gestion de Planes no encontrados");
            }
            return Ok(dbGestionPlanes);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<GestionPlane>>> Post(GestionPlane gestionplan)
        {
            _context.GestionPlanes.Add(gestionplan);
            await _context.SaveChangesAsync();
            return Ok(await _context.GestionPlanes.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<GestionPlane>>> Put(GestionPlane request)
        {
            var dbGestionPlanes = await _context.GestionPlanes.FindAsync(request.IdPlan);
            if (dbGestionPlanes == null)
            {
                return BadRequest("Gestion de Planes no encontrados");
            }

            dbGestionPlanes.Desayuno = request.Desayuno;
            dbGestionPlanes.MeriendaMañana = request.MeriendaMañana;
            dbGestionPlanes.Almuerzo = request.Almuerzo;
            dbGestionPlanes.MeriendaTarde = request.MeriendaTarde;
            dbGestionPlanes.Cena = request.Cena;
            dbGestionPlanes.Nombreplan = request.Nombreplan;
            dbGestionPlanes.Cedulanutricionista = request.Cedulanutricionista;
            dbGestionPlanes.Caloriastotales = request.Caloriastotales;

            await _context.SaveChangesAsync();

            return Ok(await _context.GestionPlanes.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<GestionPlane>>> Delete(int id_plan)
        {
            var dbGestionPlanes = await _context.GestionPlanes.FindAsync(id_plan);
            if (dbGestionPlanes == null)
            {
                return BadRequest("Gestion de Planes no encontrados");
            }
            _context.GestionPlanes.Remove(dbGestionPlanes);
            await _context.SaveChangesAsync();

            return Ok(await _context.GestionPlanes.ToListAsync());
        }
    }
}

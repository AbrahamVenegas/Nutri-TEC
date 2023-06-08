using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Administrador")]
    public class AdministradorController : ControllerBase
    {
        private readonly PostgresContext _context;

        public AdministradorController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Administrador>>> Get()
        {
            return Ok(await _context.Administradors.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Admin")]
        public async Task<ActionResult<List<Administrador>>> Get(int cedula_admin)
        {
            var dbAdministrador = await _context.Administradors.FindAsync(cedula_admin);
            if (dbAdministrador == null)
            {
                return BadRequest("Administrador no encontrado");
            }
            return Ok(dbAdministrador);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Administrador>>> Post(Administrador administrador)
        {
            _context.Administradors.Add(administrador);
            await _context.SaveChangesAsync();
            return Ok(await _context.Administradors.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<Administrador>>> Put(Administrador request)
        {
            var dbAdministrador = await _context.Administradors.FindAsync(request.Cedula);
            if (dbAdministrador == null)
            {
                return BadRequest("Administrador no encontrado");
            }

            dbAdministrador.Nombre = request.Nombre;
            dbAdministrador.Apellido1 = request.Apellido1;
            dbAdministrador.Apellido2 = request.Apellido2;
            dbAdministrador.Usuario = request.Usuario;
            dbAdministrador.Password = request.Password;
            dbAdministrador.Email = request.Email;

            await _context.SaveChangesAsync();

            return Ok(await _context.Administradors.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<Administrador>>> Delete(int cedula_admin)
        {
            var dbAdministrador = await _context.Administradors.FindAsync(cedula_admin);
            if (dbAdministrador == null)
            {
                return BadRequest("Administrador no encontrado");
            }
            _context.Administradors.Remove(dbAdministrador);
            await _context.SaveChangesAsync();

            return Ok(await _context.Administradors.ToListAsync());
        }

    }
}

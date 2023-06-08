using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/AsociacionCliente")]
    public class AsociacionClienteController : ControllerBase
    {
        private readonly PostgresContext _context;

        public AsociacionClienteController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<PacientesAsociado>>> Get()
        {
            return Ok(await _context.PacientesAsociados.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_AsociacionCliente")]
        public async Task<ActionResult<List<PacientesAsociado>>> Get(int id_cliente_asociado)
        {
            var dbAsociacionCliente = await _context.PacientesAsociados.FindAsync(id_cliente_asociado);
            if (dbAsociacionCliente == null)
            {
                return BadRequest("Clientes Asociados no encontrado");
            }
            return Ok(dbAsociacionCliente);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<PacientesAsociado>>> Post(PacientesAsociado clienteasociado)
        {
            _context.PacientesAsociados.Add(clienteasociado);
            await _context.SaveChangesAsync();
            return Ok(await _context.PacientesAsociados.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<PacientesAsociado>>> Put(PacientesAsociado request)
        {
            var dbAsociacionCliente = await _context.PacientesAsociados.FindAsync(request.Cedulanutricionista);
            if (dbAsociacionCliente == null)
            {
                return BadRequest("Clientes Asociados no encontrado");
            }

            dbAsociacionCliente.Planasignado = request.Planasignado;
            dbAsociacionCliente.Fechaplan = request.Fechaplan;

            await _context.SaveChangesAsync();

            return Ok(await _context.PacientesAsociados.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<PacientesAsociado>>> Delete(int id_cliente_asociado)
        {
            var dbAsociacionCliente = await _context.PacientesAsociados.FindAsync(id_cliente_asociado);
            if (dbAsociacionCliente == null)
            {
                return BadRequest("Clientes Asociados no encontrado");
            }
            _context.PacientesAsociados.Remove(dbAsociacionCliente);
            await _context.SaveChangesAsync();

            return Ok(await _context.PacientesAsociados.ToListAsync());
        }
    }
}

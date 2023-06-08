using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/TipoPago")]
    public class TipoPagoController : ControllerBase
    {
        private readonly PostgresContext _context;

        public TipoPagoController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<TipoPago>>> Get()
        {
            return Ok(await _context.TipoPagos.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_TipoPago")]
        public async Task<ActionResult<List<TipoPago>>> Get(int id_tipopago)
        {
            var dbTipoPago = await _context.TipoPagos.FindAsync(id_tipopago);
            if (dbTipoPago == null)
            {
                return BadRequest("Tipo de pago no encontrado");
            }
            return Ok(dbTipoPago);
        }
        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<TipoPago>>> Post(TipoPago tipopago)
        {
            _context.TipoPagos.Add(tipopago);
            await _context.SaveChangesAsync();
            return Ok(await _context.TipoPagos.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<TipoPago>>> Put(TipoPago request)
        {
            var dbTipoPago = await _context.TipoPagos.FindAsync(request.Id);
            if (dbTipoPago == null)
            {
                return BadRequest("Tipo de pago no encontrado");
            }

            dbTipoPago.Tipo = request.Tipo;

            await _context.SaveChangesAsync();

            return Ok(await _context.TipoPagos.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<TipoPago>>> Delete(int id_tipopago)
        {
            var dbTipoPago = await _context.TipoPagos.FindAsync(id_tipopago);
            if (dbTipoPago == null)
            {
                return BadRequest("Tipo de pago no encontrado");
            }
            _context.TipoPagos.Remove(dbTipoPago);
            await _context.SaveChangesAsync();

            return Ok(await _context.TipoPagos.ToListAsync());
        }
    }
}

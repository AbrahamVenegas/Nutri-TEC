using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NutriTEC_API_PG.Models;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Producto")]
    public class ProductoControlller : ControllerBase
    {
        private readonly PostgresContext _context;

        public ProductoControlller(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Producto>>> Get()
        {
            return Ok(await _context.Productos.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Producto")]
        public async Task<ActionResult<List<Producto>>> Get(int codigobarras)
        {
            var dbProducto = await _context.Productos.FindAsync(codigobarras);
            if (dbProducto == null)
            {
                return BadRequest("Productos no encontrados");
            }
            return Ok(dbProducto);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Producto>>> Post(Producto producto)
        {
            _context.Productos.Add(producto);
            await _context.SaveChangesAsync();
            return Ok(await _context.Productos.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<Producto>>> Put(Producto request)
        {
            var dbProducto = await _context.Productos.FindAsync(request.CodigoBarras);
            if (dbProducto == null)
            {
                return BadRequest("Productos no encontrados");
            }

            dbProducto.Descripcion = request.Descripcion;
            dbProducto.TamanoPorciones = request.TamanoPorciones;
            dbProducto.Energia = request.Energia;
            dbProducto.Grasa = request.Grasa;
            dbProducto.Sodio = request.Sodio;
            dbProducto.Carbohidratos = request.Carbohidratos;
            dbProducto.Proteina = request.Proteina;
            dbProducto.Vitaminas = request.Vitaminas;
            dbProducto.Calcio = request.Calcio;
            dbProducto.Hierro = request.Hierro;
            dbProducto.Aprobado = request.Aprobado;

            await _context.SaveChangesAsync();

            return Ok(await _context.Productos.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<Producto>>> Delete(int codigobarras)
        {
            var dbProducto = await _context.Productos.FindAsync(codigobarras);
            if (dbProducto == null)
            {
                return BadRequest("Productos no encontrados");
            }
            _context.Productos.Remove(dbProducto);
            await _context.SaveChangesAsync();

            return Ok(await _context.Productos.ToListAsync());
        }
    }
}

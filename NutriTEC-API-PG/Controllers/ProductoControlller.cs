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

        // GET by id: Se muestran los datos obtenidos por Codigo de barras
        [HttpGet("Get_CodigoBarras")]
        public async Task<ActionResult<List<Producto>>> Get(int codigo)
        {
            var dbProducto = await _context.Productos.Where(a => a.CodigoBarras == codigo).ToListAsync();
            if (dbProducto == null)
            {
                return BadRequest("Nutricionista no encontrado");
            }
            return Ok(dbProducto);
        }

        // GET by id: Se muestran los datos obtenidos por Descripcion
        [HttpGet("Get_Descripcion")]
        public async Task<ActionResult<List<Producto>>> Get(String descripcion)
        {
            var dbProducto = await _context.Productos.Where(a => a.Descripcion == descripcion).ToListAsync();
            if (dbProducto == null)
            {
                return BadRequest("Nutricionista no encontrado");
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

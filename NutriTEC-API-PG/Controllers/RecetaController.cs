using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;

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

        [HttpGet("SPHacerReceta")]
        public async Task<ActionResult<int>> GetAprobado(int id_producto1, int porcion1, int id_producto2,
            int porcion2, int id_producto3, int porcion3, String descripcion, int codigo)
        {
            var result = await _context.Database.ExecuteSqlRawAsync(
                "CALL hacer_recetas(@id_producto1, @porcion1," +
                "@id_producto2, @porcion2, @id_producto3, @porcion3, @descripcion, @codigo)",
                new NpgsqlParameter("id_producto1", id_producto1),
                new NpgsqlParameter("porcion1", porcion1),
                new NpgsqlParameter("id_producto2", id_producto2),
                new NpgsqlParameter("porcion2", porcion2),
                new NpgsqlParameter("id_producto3", id_producto3),
                new NpgsqlParameter("porcion3", porcion3),
                new NpgsqlParameter("descripcion", descripcion),
                new NpgsqlParameter("codigo", codigo)
            );

            return Ok(result);
        }

    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using NutriTEC_API_PG.Models;
using System.Text.Json.Nodes;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/AprobacionProductos")]
    public class AprobacionProductos : ControllerBase
    {
        private readonly PostgresContext _context;

        public AprobacionProductos(PostgresContext context)
        {
            _context = context;
        }

        [HttpGet("SPAprobado")]
        public async Task<ActionResult<int>> GetAprobado(int cedula_admin, int codigo_barras)
        {
            var result = await _context.Database.ExecuteSqlRawAsync(
                "CALL aprobar_productos(@cedula_admin, @codigo_barras)",
                new NpgsqlParameter("cedula_admin", cedula_admin),
                new NpgsqlParameter("codigo_barras", codigo_barras)
            );

            return Ok(result);
        }

    }
}

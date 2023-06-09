using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using NutriTEC_API_PG.Models;
using System.Text.Json.Nodes;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/AprobacionProductos")]
    public class AsociarPlanController : ControllerBase
    {
        private readonly PostgresContext _context;

        public AsociarPlanController(PostgresContext context)
        {
            _context = context;
        }

        [HttpGet("SPAsociarPlan")]
        public async Task<ActionResult<int>> GetAprobado(int id_cliente, int id_planes,
            String fecha_inicio, String fecha_final)
        {
            var result = await _context.Database.ExecuteSqlRawAsync(
                "CALL asociar_planes(@id_cliente, @id_planes, @fecha_inicio, @fecha_final)",
                new NpgsqlParameter("id_cliente", id_cliente),
                new NpgsqlParameter("id_planes", id_planes),
                new NpgsqlParameter("fecha_inicio", fecha_inicio),
                new NpgsqlParameter("fecha_final", fecha_final)
            );

            return Ok(result);
        }

    }
}

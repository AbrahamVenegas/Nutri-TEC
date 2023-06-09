using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/ReporteCobro")]
    public class ReporteCobroController : ControllerBase
    {

        private readonly PostgresContext _context;

        public ReporteCobroController(PostgresContext context)
        {
            _context = context;
        }

        [HttpGet("ObtenerReporteCobro")]
        public async Task<ActionResult<IEnumerable<ReporteCobro>>> ObtenerPacientesSinNutricionistas()
        {
            var datosVista = await _context.Set<ReporteCobro>().FromSqlRaw("SELECT * FROM public.reporte_cobro").ToListAsync();
            return Ok(datosVista);
        }
    }
}

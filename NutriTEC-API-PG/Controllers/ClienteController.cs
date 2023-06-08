using Microsoft.AspNetCore.Mvc;
using NutriTEC_API_PG.Models;
using Microsoft.EntityFrameworkCore;

namespace NutriTEC_API_PG.Controllers
{
    [ApiController]
    [Route("api/Cliente")]
    public class ClienteController : ControllerBase
    {
        private readonly PostgresContext _context;

        public ClienteController(PostgresContext context)
        {
            _context = context;
        }

        // GET: Se muestran los datos obtenidos 
        [HttpGet("Get")]
        public async Task<ActionResult<List<Cliente>>> Get()
        {
            return Ok(await _context.Clientes.ToListAsync());
        }

        // GET by id: Se muestran los datos obtenidos por ID 
        [HttpGet("Get_Id_Cliente")]
        public async Task<ActionResult<List<Cliente>>> Get(int id_cliente)
        {
            var dbCliente = await _context.Clientes.FindAsync(id_cliente);
            if (dbCliente == null)
            {
                return BadRequest("Cliente no encontrado");
            }
            return Ok(dbCliente);
        }

        // POST: Se guardan los datos
        [HttpPost("Post")]
        public async Task<ActionResult<List<Cliente>>> Post(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();
            return Ok(await _context.Clientes.ToListAsync());
        }

        // PUT: Se actualiza los datos
        [HttpPut("Edit")]
        public async Task<ActionResult<List<Cliente>>> Put(Cliente request)
        {
            var dbCliente = await _context.Clientes.FindAsync(request.Id);
            if (dbCliente == null)
            {
                return BadRequest("Cliente no encontrado");
            }

            dbCliente.Nombre = request.Nombre;
            dbCliente.Apellido1 = request.Apellido1;
            dbCliente.Apellido2 = request.Apellido2;
            dbCliente.Edad = request.Edad;
            dbCliente.FechaNacimiento = request.FechaNacimiento;
            dbCliente.Peso = request.Peso;
            dbCliente.Altura = request.Altura;
            dbCliente.Imc = request.Imc;
            dbCliente.PaisResidencia = request.PaisResidencia;
            dbCliente.CaloriasMaximas = request.CaloriasMaximas;
            dbCliente.Email = request.Email;
            dbCliente.Password = request.Password;
            dbCliente.NombreUsuario = request.NombreUsuario;
            dbCliente.Medidas = request.Medidas;
            dbCliente.Direccion = request.Direccion;


            await _context.SaveChangesAsync();

            return Ok(await _context.Clientes.ToListAsync());
        }

        // DELETE: se elimina un dato
        [HttpDelete("Delete")]
        public async Task<ActionResult<List<Cliente>>> Delete(int Id)
        {
            var dbCliente = await _context.Clientes.FindAsync(Id);
            if (dbCliente == null)
            {
                return BadRequest("Cliente no encontrado");
            }
            _context.Clientes.Remove(dbCliente);
            await _context.SaveChangesAsync();

            return Ok(await _context.Clientes.ToListAsync());
        }

    }
}

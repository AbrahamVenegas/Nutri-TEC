using Microsoft.EntityFrameworkCore;
using NutriTEC.Models;

namespace NutriTEC.Data
{
    public class NutriTECDb: DbContext
    {
        public NutriTECDb(DbContextOptions<NutriTECDb> options) : base(options) {
        }
        public DbSet<Clientes> Cliente => Set<Clientes>();
        public DbSet<Medidas> Medida => Set<Medidas>();
        public DbSet<Consumo> Consumos => Set<Consumo>();
        public DbSet<GestionProductos> GestiondeProductos => Set<GestionProductos>();
        public DbSet<Administrador> Administradores => Set<Administrador>();
        public DbSet<Nutricionista> Nutricionistas => Set<Nutricionista>();
        public DbSet<PacientesAsociados> PacienteAsociado => Set<PacientesAsociados>();
        public DbSet<GestionPlanes> GestiondePlanes => Set<GestionPlanes>();
        public DbSet<TipoPago> TiposdePago => Set<TipoPago>();


    }
}

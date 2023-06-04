using Microsoft.EntityFrameworkCore;
using NutriTEC.Models;

namespace NutriTEC.Data
{
    public class GestionProductosDb: DbContext
    {
        public GestionProductosDb(DbContextOptions<GestionProductosDb> options) : base(options){
        }
        public DbSet<GestionProductos> GestiondeProductos => Set<GestionProductos>();
    }
}

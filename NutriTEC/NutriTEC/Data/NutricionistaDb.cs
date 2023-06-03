using Microsoft.EntityFrameworkCore;
using NutriTEC.Models;

namespace NutriTEC.Data
{
    public class NutricionistaDb: DbContext
    {
        public NutricionistaDb(DbContextOptions<NutricionistaDb> options) : base(options) {
        }
        public DbSet<Nutricionista> Nutricionistas => Set<Nutricionista>();
    }
}

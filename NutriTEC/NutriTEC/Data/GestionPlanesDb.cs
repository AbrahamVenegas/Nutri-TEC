using Microsoft.EntityFrameworkCore;
using NutriTEC.Models;

namespace NutriTEC.Data
{
    public class GestionPlanesDb : DbContext
    {
        public GestionPlanesDb(DbContextOptions<GestionPlanesDb> options) : base(options)
        {
        }
        public DbSet<GestionPlanes> GestiondePlanes => Set<GestionPlanes>();
    }
}
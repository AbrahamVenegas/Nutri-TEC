using Microsoft.EntityFrameworkCore;
using NutriTEC.Models;

namespace NutriTEC.Data
{
    public class OfficeDb : DbContext
    {
        public OfficeDb(DbContextOptions<OfficeDb> options) : base(options)
        {

        }
        public DbSet<Employee> Employees => Set<Employee>();
    }
}
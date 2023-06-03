using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NutriTEC.Migrations.NutricionistaDbMigrations
{
    /// <inheritdoc />
    public partial class forthmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Nutricionistas",
                newName: "Cedula");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Cedula",
                table: "Nutricionistas",
                newName: "Id");
        }
    }
}

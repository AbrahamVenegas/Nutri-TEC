using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace NutriTEC.Migrations.GestionPlanesDbMigrations
{
    /// <inheritdoc />
    public partial class forthmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GestiondePlanes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Desayuno = table.Column<int>(type: "integer", nullable: false),
                    MeriendaMañana = table.Column<int>(type: "integer", nullable: false),
                    Almuerzo = table.Column<int>(type: "integer", nullable: false),
                    MeriendaTarde = table.Column<int>(type: "integer", nullable: false),
                    Cena = table.Column<int>(type: "integer", nullable: false),
                    NombrePlan = table.Column<string>(type: "text", nullable: false),
                    CedulaNutricionista = table.Column<int>(type: "integer", nullable: false),
                    CaloríasTotales = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GestiondePlanes", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GestiondePlanes");
        }
    }
}

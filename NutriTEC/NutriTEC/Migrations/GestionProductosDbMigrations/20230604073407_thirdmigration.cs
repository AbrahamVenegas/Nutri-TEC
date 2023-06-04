using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace NutriTEC.Migrations.GestionProductosDbMigrations
{
    /// <inheritdoc />
    public partial class thirdmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GestiondeProductos",
                columns: table => new
                {
                    Codigo = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Descripcion = table.Column<string>(type: "text", nullable: false),
                    Porcion = table.Column<int>(type: "integer", nullable: false),
                    Energia = table.Column<int>(type: "integer", nullable: false),
                    Grasa = table.Column<int>(type: "integer", nullable: false),
                    Sodio = table.Column<int>(type: "integer", nullable: false),
                    Carbohidratos = table.Column<int>(type: "integer", nullable: false),
                    Proteina = table.Column<int>(type: "integer", nullable: false),
                    Vitaminas = table.Column<string>(type: "text", nullable: false),
                    Calcio = table.Column<int>(type: "integer", nullable: false),
                    Hierro = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GestiondeProductos", x => x.Codigo);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GestiondeProductos");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace NutriTEC.Migrations.NutricionistaDbMigrations
{
    /// <inheritdoc />
    public partial class firstmigrationNDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Nutricionistas",
                columns: table => new
                {
                    Cedula = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Apellido1 = table.Column<string>(type: "text", nullable: false),
                    Apellido2 = table.Column<string>(type: "text", nullable: false),
                    Codigo = table.Column<int>(type: "integer", nullable: false),
                    Edad = table.Column<int>(type: "integer", nullable: false),
                    Cumpleaños = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Peso = table.Column<int>(type: "integer", nullable: false),
                    Altura = table.Column<int>(type: "integer", nullable: false),
                    IMC = table.Column<int>(type: "integer", nullable: false),
                    Provincia = table.Column<string>(type: "text", nullable: false),
                    Canton = table.Column<string>(type: "text", nullable: false),
                    Distrito = table.Column<string>(type: "text", nullable: false),
                    Foto = table.Column<string>(type: "text", nullable: false),
                    Tarjeta = table.Column<int>(type: "integer", nullable: false),
                    TipoCobro = table.Column<string>(type: "text", nullable: false),
                    Usuario = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nutricionistas", x => x.Cedula);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Nutricionistas");
        }
    }
}

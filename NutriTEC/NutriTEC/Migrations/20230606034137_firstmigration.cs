using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace NutriTEC.Migrations
{
    /// <inheritdoc />
    public partial class firstmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Administradores",
                columns: table => new
                {
                    Cedula = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Apellido1 = table.Column<string>(type: "text", nullable: false),
                    Apellido2 = table.Column<string>(type: "text", nullable: false),
                    Usuario = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Administradores", x => x.Cedula);
                });

            migrationBuilder.CreateTable(
                name: "Cliente",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Apellido1 = table.Column<string>(type: "text", nullable: false),
                    Apellido2 = table.Column<string>(type: "text", nullable: false),
                    Edad = table.Column<int>(type: "integer", nullable: false),
                    FechaNacimiento = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Peso = table.Column<decimal>(type: "numeric", nullable: false),
                    Altura = table.Column<decimal>(type: "numeric", nullable: false),
                    IMC = table.Column<decimal>(type: "numeric", nullable: false),
                    PaisResidencia = table.Column<string>(type: "text", nullable: false),
                    CaloriasMaximas = table.Column<int>(type: "integer", nullable: false),
                    Usuario = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cliente", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Consumos",
                columns: table => new
                {
                    Id_cliente = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Desayuno = table.Column<int>(type: "integer", nullable: false),
                    Merienda_Mañana = table.Column<int>(type: "integer", nullable: false),
                    Almuerzo = table.Column<int>(type: "integer", nullable: false),
                    Merienda_Tarde = table.Column<int>(type: "integer", nullable: false),
                    Cena = table.Column<int>(type: "integer", nullable: false),
                    Fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consumos", x => x.Id_cliente);
                });

            migrationBuilder.CreateTable(
                name: "GestiondePlanes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Desayuno = table.Column<int>(type: "integer", nullable: false),
                    Merienda_Mañana = table.Column<int>(type: "integer", nullable: false),
                    Almuerzo = table.Column<int>(type: "integer", nullable: false),
                    Merienda_Tarde = table.Column<int>(type: "integer", nullable: false),
                    Cena = table.Column<int>(type: "integer", nullable: false),
                    NombrePlan = table.Column<string>(type: "text", nullable: false),
                    CedulaNutricionista = table.Column<int>(type: "integer", nullable: false),
                    CaloríasTotales = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GestiondePlanes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GestiondeProductos",
                columns: table => new
                {
                    Codigo_barras = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Descripcion = table.Column<string>(type: "text", nullable: false),
                    Porcion = table.Column<decimal>(type: "numeric", nullable: false),
                    Energia = table.Column<decimal>(type: "numeric", nullable: false),
                    Grasa = table.Column<decimal>(type: "numeric", nullable: false),
                    Sodio = table.Column<decimal>(type: "numeric", nullable: false),
                    Carbohidratos = table.Column<decimal>(type: "numeric", nullable: false),
                    Proteina = table.Column<decimal>(type: "numeric", nullable: false),
                    Vitaminas = table.Column<string>(type: "text", nullable: false),
                    Calcio = table.Column<decimal>(type: "numeric", nullable: false),
                    Hierro = table.Column<decimal>(type: "numeric", nullable: false),
                    Aprobado = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GestiondeProductos", x => x.Codigo_barras);
                });

            migrationBuilder.CreateTable(
                name: "Medida",
                columns: table => new
                {
                    Id_cliente = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Fecha = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Cintura = table.Column<decimal>(type: "numeric", nullable: false),
                    Cuello = table.Column<decimal>(type: "numeric", nullable: false),
                    Caderas = table.Column<decimal>(type: "numeric", nullable: false),
                    Porcentaje_musculo = table.Column<decimal>(type: "numeric", nullable: false),
                    Porcentaje_grasa = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medida", x => x.Id_cliente);
                });

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
                    TipoCobro = table.Column<int>(type: "integer", nullable: false),
                    Usuario = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nutricionistas", x => x.Cedula);
                });

            migrationBuilder.CreateTable(
                name: "PacienteAsociado",
                columns: table => new
                {
                    CedulaNutricionista = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CedulaPaciente = table.Column<int>(type: "integer", nullable: false),
                    PlanAsignado = table.Column<int>(type: "integer", nullable: false),
                    FechaPlan = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PacienteAsociado", x => x.CedulaNutricionista);
                });

            migrationBuilder.CreateTable(
                name: "TiposdePago",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Tipo = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiposdePago", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Administradores");

            migrationBuilder.DropTable(
                name: "Cliente");

            migrationBuilder.DropTable(
                name: "Consumos");

            migrationBuilder.DropTable(
                name: "GestiondePlanes");

            migrationBuilder.DropTable(
                name: "GestiondeProductos");

            migrationBuilder.DropTable(
                name: "Medida");

            migrationBuilder.DropTable(
                name: "Nutricionistas");

            migrationBuilder.DropTable(
                name: "PacienteAsociado");

            migrationBuilder.DropTable(
                name: "TiposdePago");
        }
    }
}

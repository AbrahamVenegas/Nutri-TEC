using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class Cliente
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido1 { get; set; } = null!;

    public string Apellido2 { get; set; } = null!;

    public int? Edad { get; set; }

    public string? FechaNacimiento { get; set; }

    public decimal? Peso { get; set; }

    public decimal? Altura { get; set; }

    public decimal? Imc { get; set; }

    public string? PaisResidencia { get; set; }

    public int? CaloriasMaximas { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public string? NombreUsuario { get; set; }

    public int? Medidas { get; set; }

    public int? Direccion { get; set; }

    [JsonIgnore]
    public virtual ICollection<Consumo> Consumos { get; set; } = new List<Consumo>();
    [JsonIgnore]
    public virtual Medida? MedidasNavigation { get; set; }
    [JsonIgnore]
    public virtual ICollection<PacientesAsociado> PacientesAsociados { get; set; } = new List<PacientesAsociado>();
}

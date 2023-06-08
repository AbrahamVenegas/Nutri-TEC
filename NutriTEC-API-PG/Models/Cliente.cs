using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Cliente
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido1 { get; set; } = null!;

    public string Apellido2 { get; set; } = null!;

    public int Edad { get; set; }

    public string? FechaNacimiento { get; set; }

    public decimal? Peso { get; set; }

    public decimal? Altura { get; set; }

    public decimal? Imc { get; set; }

    public string? PaisResidencia { get; set; }

    public decimal? Cintura { get; set; }

    public decimal? Cuello { get; set; }

    public decimal? Caderas { get; set; }

    public decimal? PorcentajeMusculo { get; set; }

    public decimal? PorcentajeGrasa { get; set; }

    public int? CaloriasMaximas { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public virtual ICollection<AsignacionPlan> AsignacionPlans { get; set; } = new List<AsignacionPlan>();

    public virtual ICollection<Consumo> Consumos { get; set; } = new List<Consumo>();

    public virtual ICollection<Medida> Medida { get; set; } = new List<Medida>();

    public virtual ICollection<Nutricionistum> Cedulanutricionista { get; set; } = new List<Nutricionistum>();
}

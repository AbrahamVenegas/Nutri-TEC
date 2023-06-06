using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Nutricionistum
{
    public int Cedula { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido1 { get; set; } = null!;

    public string Apellido2 { get; set; } = null!;

    public int Codigo { get; set; }

    public int Edad { get; set; }

    public DateOnly FechaNacimiento { get; set; }

    public int Peso { get; set; }

    public int Altura { get; set; }

    public int Imc { get; set; }

    public int Tarjeta { get; set; }

    public int Tipocobro { get; set; }

    public string Usuario { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int Direccion { get; set; }

    public virtual Direccion DireccionNavigation { get; set; } = null!;

    public virtual ICollection<PacientesAsociado> PacientesAsociados { get; set; } = new List<PacientesAsociado>();

    public virtual TipoPago TipocobroNavigation { get; set; } = null!;
}

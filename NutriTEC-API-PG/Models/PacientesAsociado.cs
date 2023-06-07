using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class PacientesAsociado
{
    public int Cedulanutricionista { get; set; }

    public int Cedulapaciente { get; set; }

    public int? Planasignado { get; set; }

    public DateOnly? Fechaplan { get; set; }

    public virtual Nutricionistum CedulanutricionistaNavigation { get; set; } = null!;

    public virtual Cliente CedulapacienteNavigation { get; set; } = null!;

    public virtual GestionPlane? PlanasignadoNavigation { get; set; }
}

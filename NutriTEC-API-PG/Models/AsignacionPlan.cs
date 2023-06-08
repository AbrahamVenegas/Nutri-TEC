using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class AsignacionPlan
{
    public int Cedulapaciente { get; set; }

    public int Planasignado { get; set; }

    public string? Fechainicio { get; set; }

    public string? Fechafin { get; set; }

    public virtual Cliente CedulapacienteNavigation { get; set; } = null!;

    public virtual GestionPlane PlanasignadoNavigation { get; set; } = null!;
}

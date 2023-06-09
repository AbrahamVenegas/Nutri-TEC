using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class AsignacionPlan
{
    public int Cedulapaciente { get; set; }

    public int Planasignado { get; set; }

    public string? Fechainicio { get; set; }

    public string? Fechafin { get; set; }

    [JsonIgnore]
    public virtual Cliente? CedulapacienteNavigation { get; set; }

    [JsonIgnore]
    public virtual GestionPlane? PlanasignadoNavigation { get; set; }
}

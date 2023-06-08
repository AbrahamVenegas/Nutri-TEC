using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class PacientesAsociado
{
    public int Cedulanutricionista { get; set; }

    public int Cedulapaciente { get; set; }

    public int? Planasignado { get; set; }

    public string? Fechaplan { get; set; }

    [JsonIgnore]
    public virtual Nutricionistum CedulanutricionistaNavigation { get; set; }

    [JsonIgnore]
    public virtual Cliente CedulapacienteNavigation { get; set; }

    [JsonIgnore]
    public virtual GestionPlane? PlanasignadoNavigation { get; set; }
}

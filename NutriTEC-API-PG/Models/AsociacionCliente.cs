using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class AsociacionCliente
{

    public int Cedulanutricionista { get; set; }

    public int Cedulapaciente { get; set; }

    [JsonIgnore]
    public virtual Nutricionistum? CedulanutricionistaNavigation { get; set; }

    [JsonIgnore]
    public virtual Cliente? CedulapacienteNavigation { get; set; }
}

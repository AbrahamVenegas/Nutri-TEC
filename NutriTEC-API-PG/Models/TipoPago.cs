using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class TipoPago
{
    public int Id { get; set; }

    public string Tipo { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<Nutricionistum> Nutricionista { get; set; } = new List<Nutricionistum>();
}

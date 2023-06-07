using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class TipoPago
{
    public int Id { get; set; }

    public string Tipo { get; set; } = null!;

    public virtual ICollection<Nutricionistum> Nutricionista { get; set; } = new List<Nutricionistum>();
}

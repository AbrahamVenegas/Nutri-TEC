using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Direccion
{
    public int Id { get; set; }

    public string? Provincia { get; set; }

    public string? Canton { get; set; }

    public string? Distrito { get; set; }

    public virtual ICollection<Nutricionistum> Nutricionista { get; set; } = new List<Nutricionistum>();
}

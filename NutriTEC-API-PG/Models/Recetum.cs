using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Recetum
{
    public int Id { get; set; }

    public string? Nombrereceta { get; set; }

    public virtual ICollection<Producto> Idproductos { get; set; } = new List<Producto>();
}

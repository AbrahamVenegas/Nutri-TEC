using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Ingrediente
{
    public int Idreceta { get; set; }

    public int Idproducto { get; set; }

    public virtual Producto IdproductoNavigation { get; set; } = null!;

    public virtual Recetum IdrecetaNavigation { get; set; } = null!;
}

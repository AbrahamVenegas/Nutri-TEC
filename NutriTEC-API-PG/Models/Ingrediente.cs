using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class Ingrediente
{
    public int Idreceta { get; set; }

    public int Idproducto { get; set; }

    [JsonIgnore]
    public virtual Producto? IdproductoNavigation { get; set; }

    [JsonIgnore]
    public virtual Recetum? IdrecetaNavigation { get; set; }
}

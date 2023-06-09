using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class Consumo
{
    public int IdCliente { get; set; }

    public string Fecha { get; set; } = null!;

    public int? Desayuno { get; set; }

    public int? MeriendaMañana { get; set; }

    public int? Almuerzo { get; set; }

    public int? MeriendaTarde { get; set; }

    public int? Cena { get; set; }

    [JsonIgnore]
    public virtual Producto? AlmuerzoNavigation { get; set; }

    [JsonIgnore]
    public virtual Producto? CenaNavigation { get; set; }

    [JsonIgnore]
    public virtual Producto? DesayunoNavigation { get; set; }

    [JsonIgnore]
    public virtual Cliente IdClienteNavigation { get; set; }

    [JsonIgnore]
    public virtual Producto? MeriendaMañanaNavigation { get; set; }

    [JsonIgnore]
    public virtual Producto? MeriendaTardeNavigation { get; set; }
}

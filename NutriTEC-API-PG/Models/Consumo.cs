using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Consumo
{
    public int Id { get; set; }

    public int? Desayuno { get; set; }

    public int? MeriendaMañana { get; set; }

    public int? Almuerzo { get; set; }

    public int? MeriendaTarde { get; set; }

    public int? Cena { get; set; }

    public DateOnly Fecha { get; set; }

    public int IdCliente { get; set; }

    public virtual Producto? AlmuerzoNavigation { get; set; }

    public virtual Producto? CenaNavigation { get; set; }

    public virtual Producto? DesayunoNavigation { get; set; }

    public virtual Cliente IdClienteNavigation { get; set; } = null!;

    public virtual Producto? MeriendaMañanaNavigation { get; set; }

    public virtual Producto? MeriendaTardeNavigation { get; set; }
}

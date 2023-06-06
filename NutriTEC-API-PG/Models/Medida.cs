using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Medida
{
    public int Id { get; set; }

    public DateOnly? Fecha { get; set; }

    public int? IdCliente { get; set; }

    public decimal? Cintura { get; set; }

    public decimal? Cuello { get; set; }

    public decimal? Caderas { get; set; }

    public decimal? PorcentajeMusculo { get; set; }

    public decimal? PorcentajeGrasa { get; set; }

    public virtual ICollection<Cliente> Clientes { get; set; } = new List<Cliente>();
}

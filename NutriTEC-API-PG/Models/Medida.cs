using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Medida
{
    public int IdMedida { get; set; }

    public int IdCliente { get; set; }

    public string Fecha { get; set; } = null!;

    public decimal? Cintura { get; set; }

    public decimal? Cuello { get; set; }

    public decimal? Caderas { get; set; }

    public decimal? PorcentajeMusculo { get; set; }

    public decimal? PorcentajeGrasa { get; set; }

    public virtual Cliente IdClienteNavigation { get; set; } = null!;
}

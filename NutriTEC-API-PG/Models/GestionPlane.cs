using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class GestionPlane
{
    public int IdPlan { get; set; }

    public int? Desayuno { get; set; }

    public int? MeriendaMañana { get; set; }

    public int? Almuerzo { get; set; }

    public int? MeriendaTarde { get; set; }

    public int? Cena { get; set; }

    public string Nombreplan { get; set; } = null!;

    public int Cedulanutricionista { get; set; }

    public int? Caloriastotales { get; set; }

    [JsonIgnore]
    public virtual Producto? AlmuerzoNavigation { get; set; }

    [JsonIgnore]
    public virtual ICollection<AsignacionPlan> AsignacionPlans { get; set; } = new List<AsignacionPlan>();

    [JsonIgnore]
    public virtual Producto? CenaNavigation { get; set; }

    [JsonIgnore]
    public virtual Producto? DesayunoNavigation { get; set; }

    [JsonIgnore]
    public virtual Producto? MeriendaMañanaNavigation { get; set; }

    [JsonIgnore]
    public virtual Producto? MeriendaTardeNavigation { get; set; }
}

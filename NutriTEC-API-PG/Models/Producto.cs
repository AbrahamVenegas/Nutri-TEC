using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NutriTEC_API_PG.Models;

public partial class Producto
{
    public int CodigoBarras { get; set; }

    public string Descripcion { get; set; } = null!;

    public decimal? TamanoPorciones { get; set; }

    public decimal? Energia { get; set; }

    public decimal? Grasa { get; set; }

    public decimal? Sodio { get; set; }

    public decimal? Carbohidratos { get; set; }

    public decimal? Proteina { get; set; }

    public string? Vitaminas { get; set; }

    public decimal? Calcio { get; set; }

    public decimal? Hierro { get; set; }

    public bool? Aprobado { get; set; }

    [JsonIgnore]
    public virtual ICollection<Consumo> ConsumoAlmuerzoNavigations { get; set; } = new List<Consumo>();

    [JsonIgnore]
    public virtual ICollection<Consumo> ConsumoCenaNavigations { get; set; } = new List<Consumo>();

    [JsonIgnore]
    public virtual ICollection<Consumo> ConsumoDesayunoNavigations { get; set; } = new List<Consumo>();

    [JsonIgnore]
    public virtual ICollection<Consumo> ConsumoMeriendaMañanaNavigations { get; set; } = new List<Consumo>();

    [JsonIgnore]
    public virtual ICollection<Consumo> ConsumoMeriendaTardeNavigations { get; set; } = new List<Consumo>();

    [JsonIgnore]
    public virtual ICollection<GestionPlane> GestionPlaneAlmuerzoNavigations { get; set; } = new List<GestionPlane>();

    [JsonIgnore]
    public virtual ICollection<GestionPlane> GestionPlaneCenaNavigations { get; set; } = new List<GestionPlane>();

    [JsonIgnore]
    public virtual ICollection<GestionPlane> GestionPlaneDesayunoNavigations { get; set; } = new List<GestionPlane>();

    [JsonIgnore]
    public virtual ICollection<GestionPlane> GestionPlaneMeriendaMañanaNavigations { get; set; } = new List<GestionPlane>();

    [JsonIgnore]
    public virtual ICollection<GestionPlane> GestionPlaneMeriendaTardeNavigations { get; set; } = new List<GestionPlane>();
}

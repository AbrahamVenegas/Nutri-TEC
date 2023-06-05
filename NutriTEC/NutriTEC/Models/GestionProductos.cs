using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class GestionProductos
    {
        [Key]
        public int Codigo_barras { get; set; }
        public string Descripcion { get; set; }
        public decimal Porcion { get; set; }
        public decimal Energia { get; set; }
        public decimal Grasa { get; set; }
        public decimal Sodio { get; set; }
        public decimal Carbohidratos { get; set; }
        public decimal Proteina { get; set; }
        public string Vitaminas { get; set; }
        public decimal Calcio { get; set; }
        public decimal Hierro { get; set; }
        public Boolean Aprobado { get; set; }

    }
}

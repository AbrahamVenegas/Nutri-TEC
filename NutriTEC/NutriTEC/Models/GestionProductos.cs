using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class GestionProductos
    {
        [Key]
        public int Codigo { get; set; }
        public string Descripcion { get; set; }
        public int Porcion { get; set; }
        public int Energia { get; set; }
        public int Grasa { get; set; }
        public int Sodio { get; set; }
        public int Carbohidratos { get; set; }
        public int Proteina { get; set; }
        public string Vitaminas { get; set; }
        public int Calcio { get; set; }
        public int Hierro { get; set; }

    }
}

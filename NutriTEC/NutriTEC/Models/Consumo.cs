using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class Consumo
    {
        public int Desayuno { get; set; }
        public int Merienda_Mañana { get; set; }
        public int Almuerzo { get; set; }
        public int Merienda_Tarde { get; set; }
        public int Cena { get; set; }
        public DateTime Fecha { get; set; }
        
        [Key]
        public int Id_cliente { get; set; }
    }
}

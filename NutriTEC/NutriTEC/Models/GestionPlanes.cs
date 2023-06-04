using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class GestionPlanes
    {
        [Key]
        public int Id { get; set; }
        public int Desayuno { get; set; }
        public int MeriendaMañana { get; set; }
        public int Almuerzo { get; set; }
        public int MeriendaTarde { get; set; }
        public int Cena { get; set; }
        public string NombrePlan { get; set; }
        public int CedulaNutricionista { get; set; }
        public int CaloríasTotales { get; set; }
    }
}

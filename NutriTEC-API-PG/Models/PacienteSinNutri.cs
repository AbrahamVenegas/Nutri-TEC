using System.ComponentModel.DataAnnotations;

namespace NutriTEC_API_PG.Models
{

    public class PacienteSinNutricionista
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Email { get; set; }
    }

}

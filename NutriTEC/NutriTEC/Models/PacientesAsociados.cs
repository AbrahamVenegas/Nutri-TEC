using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class PacientesAsociados
    {
        [Key]
        public int CedulaNutricionista { get; set; }
        public int CedulaPaciente { get; set; }

        public int PlanAsignado { get; set; }
        public DateTime FechaPlan { get; set; }

    }
}

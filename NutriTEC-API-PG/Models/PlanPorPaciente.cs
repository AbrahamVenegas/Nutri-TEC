using System.ComponentModel.DataAnnotations;

namespace NutriTEC_API_PG.Models
{

    public class PlanPorPaciente
    {
        public string PacienteNombre { get; set; }
        public string PacienteApellido1 { get; set; }
        public decimal Peso { get; set; }
        public decimal IMC { get; set; }
        public string GestionPlanes { get; set; }
        public decimal CaloriasMaximasPaciente { get; set; }
        public decimal CaloriasPlan { get; set; }
    }

}

using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class Nutricionista
    {
        [Key]
        public int Cedula { get; set; }
        
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public int Codigo { get; set; }
        public int Edad { get; set; }
        public DateTime Cumpleaños { get; set; }
        public int Peso { get; set; }
        public int Altura { get; set; }
        public int IMC { get; set; }
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }
        public string Foto { get; set; }
        public int Tarjeta { get; set; }
        public string TipoCobro { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}

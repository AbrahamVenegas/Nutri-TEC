using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class Clientes
    {
        [Key]
        public int Id { get; set; }

        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public int Edad { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public decimal Peso { get; set; }
        public decimal Altura { get; set; }
        public decimal IMC { get; set; }
        public string PaisResidencia { get; set; }
        public int CaloriasMaximas { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}

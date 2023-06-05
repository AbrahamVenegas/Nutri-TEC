using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class Administrador
    {
        [Key]
        public int Cedula { get; set; }

        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class TipoPago
    {
        [Key]
        public int Id { get; set; }
        public string Tipo { get; set; }
    }
}

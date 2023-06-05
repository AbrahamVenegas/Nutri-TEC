using System.ComponentModel.DataAnnotations;

namespace NutriTEC.Models
{
    public class Medidas
    {
        public DateTime Fecha { get; set; }
        [Key]
        public int Id_cliente { get; set; }

        public decimal Cintura { get; set; }
        public decimal Cuello { get; set; }
        public decimal Caderas { get; set; }
        public decimal Porcentaje_musculo { get; set; }
        public decimal Porcentaje_grasa { get; set; }

    }
}

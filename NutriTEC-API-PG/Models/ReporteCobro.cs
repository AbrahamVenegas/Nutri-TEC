using System.ComponentModel.DataAnnotations;

namespace NutriTEC_API_PG.Models
{
    
    public class ReporteCobro
    {
        public string Email { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string Tarjeta { get; set; }
        public int TipoCobro { get; set; }
        public int Monto { get; set; }
        public decimal MontoTotal { get; set; }
        public int Descuento { get; set; }
    }

}

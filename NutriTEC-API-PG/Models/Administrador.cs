using System;
using System.Collections.Generic;

namespace NutriTEC_API_PG.Models;

public partial class Administrador
{
    public int Cedula { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido1 { get; set; } = null!;

    public string Apellido2 { get; set; } = null!;

    public string Usuario { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Email { get; set; } = null!;
}

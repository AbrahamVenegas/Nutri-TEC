using Microsoft.EntityFrameworkCore;
using NutriTEC.Data;
using NutriTEC.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionStringN = builder.Configuration.GetConnectionString("PostgreSQLConnection");
builder.Services.AddDbContext<NutriTECDb>(options =>
    options.UseNpgsql(connectionStringN));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Métodos para la tabla Clientes

app.MapPost("/cliente/", async (Clientes cl, NutriTECDb db) =>
{
    db.Cliente.Add(cl);
    await db.SaveChangesAsync();

    return Results.Created($"/cliente/{cl.Id}", cl);

});

app.MapGet("/cliente", async (NutriTECDb db) =>
{
    return await db.Cliente.ToListAsync();
});

app.MapPut("/cliente/{id:int}", async (int id, Clientes cl, NutriTECDb db) =>
{
    if (cl.Id != id)
        return Results.BadRequest();

    var cliente = await db.Cliente.FindAsync(id);

    if (cliente is null) return Results.NotFound();

    cliente.Nombre = cl.Nombre;
    cliente.Apellido1 = cl.Apellido1;
    cliente.Apellido2 = cl.Apellido2;
    //cliente.Edad = cl.Edad; son derivados
    cliente.FechaNacimiento = cl.FechaNacimiento;
    cliente.Peso = cl.Peso;
    cliente.Altura = cl.Altura;
    //cliente.IMC = cl.IMC; son derivados
    cliente.PaisResidencia = cl.PaisResidencia;
    cliente.CaloriasMaximas = cl.CaloriasMaximas;
    cliente.Usuario = cl.Usuario;
    cliente.Password = cl.Password;
    cliente.Email = cl.Email;

    await db.SaveChangesAsync();

    return Results.Ok(cliente);
});

app.MapDelete("/cliente/{id:int}", async (int id, NutriTECDb db) =>
{
    var cliente = await db.Cliente.FindAsync(id);

    if (cliente is null) return Results.NotFound();

    db.Cliente.Remove(cliente);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla Medidas

app.MapPost("/medida/", async (Medidas m, NutriTECDb db) =>
{
    db.Medida.Add(m);
    await db.SaveChangesAsync();

    return Results.Created($"/medida/{m.Id_cliente}", m);

});

app.MapGet("/medida", async (NutriTECDb db) =>
{
    return await db.Medida.ToListAsync();
});

app.MapPut("/medida/{id:int}", async (int id, Medidas m, NutriTECDb db) =>
{
    if (m.Id_cliente != id)
        return Results.BadRequest();

    var medida = await db.Medida.FindAsync(id);

    if (medida is null) return Results.NotFound();

    medida.Fecha = m.Fecha;
    medida.Cintura = m.Cintura;
    medida.Cuello = m.Cuello;
    medida.Caderas = m.Caderas;
    medida.Porcentaje_musculo = m.Porcentaje_musculo;
    medida.Porcentaje_grasa = m.Porcentaje_grasa;

    await db.SaveChangesAsync();

    return Results.Ok(medida);
});

app.MapDelete("/medida/{id:int}", async (int id, NutriTECDb db) =>
{
    var medida = await db.Medida.FindAsync(id);

    if (medida is null) return Results.NotFound();

    db.Medida.Remove(medida);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla Consumo

app.MapPost("/consumos/", async (Consumo c, NutriTECDb db) =>
{
    db.Consumos.Add(c);
    await db.SaveChangesAsync();

    return Results.Created($"/consumos/{c.Id_cliente}", c);

});

app.MapGet("/consumos", async (NutriTECDb db) =>
{
    return await db.Consumos.ToListAsync();

});

app.MapPut("/consumos/{id:int}", async (int id, Consumo c, NutriTECDb db) =>
{
    if (c.Id_cliente != id)
        return Results.BadRequest();

    var consumos = await db.Consumos.FindAsync(id);

    if (consumos is null) return Results.NotFound();

    consumos.Desayuno = c.Desayuno;
    consumos.Merienda_Mañana = c.Merienda_Mañana;
    consumos.Almuerzo = c.Almuerzo;
    consumos.Merienda_Tarde = c.Merienda_Tarde;
    consumos.Cena = c.Cena;
    consumos.Fecha = c.Fecha;

    await db.SaveChangesAsync();

    return Results.Ok(consumos);
});

app.MapDelete("/consumos/{id:int}", async (int id, NutriTECDb db) =>
{
    var consumos = await db.Consumos.FindAsync(id);

    if (consumos is null) return Results.NotFound();

    db.Consumos.Remove(consumos);
    await db.SaveChangesAsync();

    return Results.NoContent();
});



//Métodos para la tabla Gestión de Productos

app.MapPost("/gestiondeproductos/", async (GestionProductos gpr, NutriTECDb db) =>
{
    db.GestiondeProductos.Add(gpr);
    await db.SaveChangesAsync();

    return Results.Created($"/gestiondeproductos/{gpr.Codigo_barras}", gpr);

});

app.MapGet("/gestiondeproductos", async (NutriTECDb db) =>
{
    return await db.GestiondeProductos.ToListAsync();
});

app.MapPut("/gestiondeproductos/{id:int}", async (int id, GestionProductos gpr, NutriTECDb db) =>
{
    if (gpr.Codigo_barras != id)
        return Results.BadRequest();

    var gestionProductos = await db.GestiondeProductos.FindAsync(id);

    if (gestionProductos is null) return Results.NotFound();

    gestionProductos.Descripcion = gpr.Descripcion;
    gestionProductos.Porcion = gpr.Porcion;
    gestionProductos.Energia = gpr.Energia;
    gestionProductos.Grasa = gpr.Grasa;
    gestionProductos.Sodio = gpr.Sodio;
    gestionProductos.Carbohidratos = gpr.Carbohidratos;
    gestionProductos.Proteina = gpr.Proteina;
    gestionProductos.Vitaminas = gpr.Vitaminas;
    gestionProductos.Calcio = gpr.Calcio;
    gestionProductos.Hierro = gpr.Hierro;
    gestionProductos.Aprobado = gpr.Aprobado;   

    await db.SaveChangesAsync();

    return Results.Ok(gestionProductos);
});

app.MapDelete("/gestiondeproductos/{id:int}", async (int id, NutriTECDb db) =>
{
    var gestionProductos = await db.GestiondeProductos.FindAsync(id);

    if (gestionProductos is null) return Results.NotFound();

    db.GestiondeProductos.Remove(gestionProductos);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla Administrador

app.MapPost("/administradores/", async (Administrador a, NutriTECDb db) =>
{
    db.Administradores.Add(a);
    await db.SaveChangesAsync();

    return Results.Created($"/administradores/{a.Cedula}", a);

});

app.MapGet("/administradores", async (NutriTECDb db) =>
{
    return await db.Administradores.ToListAsync();
});

app.MapPut("/administradores/{id:int}", async (int id, Administrador a, NutriTECDb db) =>
{
    if (a.Cedula != id)
        return Results.BadRequest();

    var administradores = await db.Administradores.FindAsync(id);

    if (administradores is null) return Results.NotFound();

    administradores.Nombre = a.Nombre;
    administradores.Apellido1 = a.Apellido1;
    administradores.Apellido2 = a.Apellido2;
    administradores.Usuario = a.Usuario;
    administradores.Password = a.Password;
    administradores.Email = a.Email;

    await db.SaveChangesAsync();

    return Results.Ok(administradores);
});

app.MapDelete("/administradores/{id:int}", async (int id, NutriTECDb db) =>
{
    var administradores = await db.Administradores.FindAsync(id);

    if (administradores is null) return Results.NotFound();

    db.Administradores.Remove(administradores);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla Nutricionista

app.MapPost("/nutricionistas/", async (Nutricionista n, NutriTECDb db) =>
{
    db.Nutricionistas.Add(n);
    await db.SaveChangesAsync();

    return Results.Created($"/nutricionistas/{n.Cedula}", n);

});

app.MapGet("/nutricionistas", async (NutriTECDb db) =>
{
    return await db.Nutricionistas.ToListAsync();
});

app.MapPut("/nutricionistas/{id:int}", async (int id, Nutricionista n, NutriTECDb db) =>
{
    if (n.Cedula != id)
        return Results.BadRequest();

    var nutricionista = await db.Nutricionistas.FindAsync(id);

    if (nutricionista is null) return Results.NotFound();

    nutricionista.Nombre = n.Nombre;
    nutricionista.Apellido1 = n.Apellido1;
    nutricionista.Apellido2 = n.Apellido2;
    nutricionista.Codigo = n.Codigo;
    //nutricionista.Edad = n.Edad; son derivados
    nutricionista.Cumpleaños = n.Cumpleaños;
    nutricionista.Peso = n.Peso;
    nutricionista.Altura = n.Altura;
    //nutricionista.IMC = n.IMC; son derivados
    nutricionista.Provincia = n.Provincia;
    nutricionista.Canton = n.Canton;
    nutricionista.Distrito = n.Distrito;
    nutricionista.Foto = n.Foto;
    nutricionista.Tarjeta = n.Tarjeta;
    nutricionista.TipoCobro = n.TipoCobro;
    nutricionista.Usuario = n.Usuario;
    nutricionista.Password = n.Password;
    nutricionista.Email = n.Email;

    await db.SaveChangesAsync();

    return Results.Ok(nutricionista);
});

app.MapDelete("/nutricionistas/{id:int}", async (int id, NutriTECDb db) =>
{
    var nutricionista = await db.Nutricionistas.FindAsync(id);

    if (nutricionista is null) return Results.NotFound();

    db.Nutricionistas.Remove(nutricionista);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla PacientesAsociados

app.MapPost("/pacienteasociado/", async (PacientesAsociados p, NutriTECDb db) =>
{
    db.PacienteAsociado.Add(p);
    await db.SaveChangesAsync();

    return Results.Created($"/pacienteasociado/{p.CedulaNutricionista}", p);

});

app.MapGet("/pacienteasociado", async (NutriTECDb db) =>
{
    return await db.PacienteAsociado.ToListAsync();
});

app.MapPut("/pacienteasociado/{id:int}", async (int id, PacientesAsociados p, NutriTECDb db) =>
{
    if (p.CedulaNutricionista != id)
        return Results.BadRequest();

    var pacienteasociado = await db.PacienteAsociado.FindAsync(id);

    if (pacienteasociado is null) return Results.NotFound();

    pacienteasociado.CedulaNutricionista = p.CedulaNutricionista;
    pacienteasociado.CedulaPaciente = p.CedulaPaciente;
    pacienteasociado.PlanAsignado = p.PlanAsignado;
    pacienteasociado.FechaPlan = p.FechaPlan;

    await db.SaveChangesAsync();

    return Results.Ok(pacienteasociado);
});

app.MapDelete("/pacienteasociado/{id:int}", async (int id, NutriTECDb db) =>
{
    var pacienteasociado = await db.PacienteAsociado.FindAsync(id);

    if (pacienteasociado is null) return Results.NotFound();

    db.PacienteAsociado.Remove(pacienteasociado);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla Gestión de Planes

app.MapPost("/gestiondeplanes/", async (GestionPlanes gpl, NutriTECDb db) =>
{
    db.GestiondePlanes.Add(gpl);
    await db.SaveChangesAsync();

    return Results.Created($"/gestiondeplanes/{gpl.Id}", gpl);

});

app.MapGet("/gestiondeplanes", async (NutriTECDb db) =>
{
    return await db.GestiondePlanes.ToListAsync();

});

app.MapPut("/gestiondeplanes/{id:int}", async (int id, GestionPlanes gpl, NutriTECDb db) =>
{
    if (gpl.Id != id)
        return Results.BadRequest();

    var gestionPlanes = await db.GestiondePlanes.FindAsync(id);

    if (gestionPlanes is null) return Results.NotFound();

    gestionPlanes.Desayuno = gpl.Desayuno;
    gestionPlanes.Merienda_Mañana = gpl.Merienda_Mañana;
    gestionPlanes.Almuerzo = gpl.Almuerzo;
    gestionPlanes.Merienda_Tarde = gpl.Merienda_Tarde;
    gestionPlanes.Cena = gpl.Cena;
    gestionPlanes.NombrePlan = gpl.NombrePlan;
    gestionPlanes.CedulaNutricionista = gpl.CedulaNutricionista;
    gestionPlanes.CaloríasTotales = gpl.CaloríasTotales;

    await db.SaveChangesAsync();

    return Results.Ok(gestionPlanes);
});

app.MapDelete("/gestiondeplanes/{id:int}", async (int id, NutriTECDb db) =>
{
    var gestionPlanes = await db.GestiondePlanes.FindAsync(id);

    if (gestionPlanes is null) return Results.NotFound();

    db.GestiondePlanes.Remove(gestionPlanes);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla TipoPago

app.MapPost("/tiposdepago/", async (TipoPago tp, NutriTECDb db) =>
{
    db.TiposdePago.Add(tp);
    await db.SaveChangesAsync();

    return Results.Created($"/tiposdepago/{tp.Id}", tp);

});

app.MapGet("/tiposdepago", async (NutriTECDb db) =>
{
    return await db.TiposdePago.ToListAsync();
});

app.MapPut("/tiposdepago/{id:int}", async (int id, TipoPago tp, NutriTECDb db) =>
{
    if (tp.Id != id)
        return Results.BadRequest();

    var tiposdepago = await db.TiposdePago.FindAsync(id);

    if (tiposdepago is null) return Results.NotFound();

    tiposdepago.Tipo = tp.Tipo;

    await db.SaveChangesAsync();

    return Results.Ok(tiposdepago);
});

app.MapDelete("/tiposdepago/{id:int}", async (int id, NutriTECDb db) =>
{
    var tiposdepago = await db.TiposdePago.FindAsync(id);

    if (tiposdepago is null) return Results.NotFound();

    db.TiposdePago.Remove(tiposdepago);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.Run();
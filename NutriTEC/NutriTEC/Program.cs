using Microsoft.EntityFrameworkCore;
using NutriTEC.Data;
using NutriTEC.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionStringN = builder.Configuration.GetConnectionString("PostgreSQLConnectionN");
builder.Services.AddDbContext<NutricionistaDb>(options =>
    options.UseNpgsql(connectionStringN));

var connectionStringGPR = builder.Configuration.GetConnectionString("PostgreSQLConnectionGPR");
builder.Services.AddDbContext<GestionProductosDb>(options =>
    options.UseNpgsql(connectionStringGPR));

var connectionStringGPL = builder.Configuration.GetConnectionString("PostgreSQLConnectionGPL");
builder.Services.AddDbContext<GestionPlanesDb>(options =>
    options.UseNpgsql(connectionStringGPL));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Métodos para la tabla Nutricionista

app.MapPost("/nutricionistas/", async (Nutricionista n, NutricionistaDb db) =>
{
    db.Nutricionistas.Add(n);
    await db.SaveChangesAsync();

    return Results.Created($"/nutricionistas/{n.Cedula}", n);

});

app.MapGet("/nutricionistas/{id:int}", async (int id, NutricionistaDb db) =>
{
    return await db.Nutricionistas.FindAsync(id)
    is Nutricionista n
    ? Results.Ok(n)
    : Results.NotFound();

});

app.MapPut("/nutricionistas/{id:int}", async (int id, Nutricionista n, NutricionistaDb db) =>
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

app.MapDelete("/nutricionistas/{id:int}", async (int id, NutricionistaDb db) =>
{
    var nutricionista = await db.Nutricionistas.FindAsync(id);

    if (nutricionista is null) return Results.NotFound();

    db.Nutricionistas.Remove(nutricionista);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla Gestión de Productos

app.MapPost("/gestiondeproductos/", async (GestionProductos gpr, GestionProductosDb db) =>
{
    db.GestiondeProductos.Add(gpr);
    await db.SaveChangesAsync();

    return Results.Created($"/gestiondeproductos/{gpr.Codigo}", gpr);

});

app.MapGet("/gestiondeproductos/{id:int}", async (int id, GestionProductosDb db) =>
{
    return await db.GestiondeProductos.FindAsync(id)
    is GestionProductos gpr
    ? Results.Ok(gpr)
    : Results.NotFound();

});

app.MapPut("/gestiondeproductos/{id:int}", async (int id, GestionProductos gpr, GestionProductosDb db) =>
{
    if (gpr.Codigo != id)
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

    await db.SaveChangesAsync();

    return Results.Ok(gestionProductos);
});

app.MapDelete("/gestiondeproductos/{id:int}", async (int id, GestionProductosDb db) =>
{
    var gestionProductos = await db.GestiondeProductos.FindAsync(id);

    if (gestionProductos is null) return Results.NotFound();

    db.GestiondeProductos.Remove(gestionProductos);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

//Métodos para la tabla Gestión de Planes

app.MapPost("/gestiondeplanes/", async (GestionPlanes gpl, GestionPlanesDb db) =>
{
    db.GestiondePlanes.Add(gpl);
    await db.SaveChangesAsync();

    return Results.Created($"/gestiondeplanes/{gpl.Id}", gpl);

});

app.MapGet("/gestiondeplanes/{id:int}", async (int id, GestionPlanesDb db) =>
{
    return await db.GestiondePlanes.FindAsync(id)
    is GestionPlanes gpl
    ? Results.Ok(gpl)
    : Results.NotFound();

});

app.MapPut("/gestiondeplanes/{id:int}", async (int id, GestionPlanes gpl, GestionPlanesDb db) =>
{
    if (gpl.Id != id)
        return Results.BadRequest();

    var gestionPlanes = await db.GestiondePlanes.FindAsync(id);

    if (gestionPlanes is null) return Results.NotFound();

    gestionPlanes.Desayuno = gpl.Desayuno;
    gestionPlanes.MeriendaMañana = gpl.MeriendaMañana;
    gestionPlanes.Almuerzo = gpl.Almuerzo;
    gestionPlanes.MeriendaTarde = gpl.MeriendaTarde;
    gestionPlanes.Cena = gpl.Cena;
    gestionPlanes.NombrePlan = gpl.NombrePlan;
    gestionPlanes.CedulaNutricionista = gpl.CedulaNutricionista;
    gestionPlanes.CaloríasTotales = gpl.CaloríasTotales;

    await db.SaveChangesAsync();

    return Results.Ok(gestionPlanes);
});

app.MapDelete("/gestiondeplanes/{id:int}", async (int id, GestionPlanesDb db) =>
{
    var gestionPlanes = await db.GestiondePlanes.FindAsync(id);

    if (gestionPlanes is null) return Results.NotFound();

    db.GestiondePlanes.Remove(gestionPlanes);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.Run();
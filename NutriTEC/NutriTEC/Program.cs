using Microsoft.EntityFrameworkCore;
using NutriTEC.Data;
using NutriTEC.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("PostgreSQLConnection");
builder.Services.AddDbContext<NutricionistaDb>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapPost("/nutricionistas/", async (Nutricionista n, NutricionistaDb db) =>
{
    db.Nutricionistas.Add(n);
    await db.SaveChangesAsync();

    return Results.Created($"/emplloyee/{n.Cedula}", n);

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
    nutricionista.Edad    = n.Edad;
    nutricionista.Cumpleaños = n.Cumpleaños;
    nutricionista.Peso = n.Peso;
    nutricionista.Altura = n.Altura;
    nutricionista.IMC = n.IMC;
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

app.MapDelete("/nutricionistas/{id:int}", async(int id, NutricionistaDb db) =>
{ 
    var nutricionista = await db.Nutricionistas.FindAsync(id);

    if (nutricionista is null) return Results.NotFound();

    db.Nutricionistas.Remove(nutricionista);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.Run();

internal record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
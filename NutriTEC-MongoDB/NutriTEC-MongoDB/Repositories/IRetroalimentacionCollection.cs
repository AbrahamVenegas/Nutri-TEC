using NutriTEC_MongoDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NutriTEC_MongoDB.Repositories
{
    public interface IRetroalimentacionCollection
    {
        Task InsertProduct(MongoRetroalimentacion product);
        Task UpdateProduct(MongoRetroalimentacion product);
        Task DeleteProduct(MongoRetroalimentacion product);    
        Task <List<MongoRetroalimentacion>> GetAllProducts();
        Task<MongoRetroalimentacion> GetProductById(string id);
        Task DeleteProduct(string id);
    }
}

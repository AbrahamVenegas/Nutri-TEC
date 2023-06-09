using MongoDB.Bson;
using MongoDB.Driver;
using NutriTEC_MongoDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NutriTEC_MongoDB.Repositories
{
    public class RetroalimenacionCollection : IRetroalimentacionCollection
    {
        internal MongoDBRepository _repository = new MongoDBRepository();
        private IMongoCollection<MongoRetroalimentacion> Collection;

        public RetroalimenacionCollection() {
            Collection = _repository.db.GetCollection<MongoRetroalimentacion>("Products");
        }
        public async Task DeleteProduct(string id)
        {
            var filter = Builders<MongoRetroalimentacion>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<MongoRetroalimentacion>> GetAllProducts()
        {
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<MongoRetroalimentacion> GetProductById(string id)
        {
            return await Collection.FindAsync(
                new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertProduct(MongoRetroalimentacion product)
        {
            await Collection.InsertOneAsync(product);
        }

        public async Task UpdateProduct(MongoRetroalimentacion product)
        {
            var filter = Builders<MongoRetroalimentacion>.Filter.Eq(s => s.Id, product.Id);
            await Collection.ReplaceOneAsync(filter, product);
        }

        Task IRetroalimentacionCollection.DeleteProduct(MongoRetroalimentacion product)
        {
            throw new NotImplementedException();
        }
    }
}

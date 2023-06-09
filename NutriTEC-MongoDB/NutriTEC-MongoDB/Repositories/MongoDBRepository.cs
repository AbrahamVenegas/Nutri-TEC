using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace NutriTEC_MongoDB.Repositories
{
    public class MongoDBRepository
    {
        public MongoClient client;
        
        public IMongoDatabase db;

        public MongoDBRepository() { 

            client = new MongoClient("mongodb+srv://NutriTEC:<password>@nutritecdb.q1wdtaq.mongodb.net/");

            db = client.GetDatabase("Inventory");
        
        }
    }
}

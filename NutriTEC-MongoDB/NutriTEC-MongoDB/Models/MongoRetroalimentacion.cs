using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NutriTEC_MongoDB.Models
{
    public class MongoRetroalimentacion
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public int stock { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Category { get; set; }

    }
}

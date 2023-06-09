using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NutriTEC_MongoDB.Models;
using NutriTEC_MongoDB.Repositories;

namespace NutriTEC_MongoDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MongoRetroalimentacionController : Controller
    {
        private IRetroalimentacionCollection db = new RetroalimenacionCollection();

        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        { 
            return Ok(await db.GetAllProducts());   
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductDetails(string id)
        {
            return Ok(await db.GetProductById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] MongoRetroalimentacion product) 
        {
            if (product == null)
                return BadRequest();
            if (product.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "The product shouldn't be empty");
            }
            await db.InsertProduct(product);

            return Created("Created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct([FromBody] MongoRetroalimentacion product, string id)
        {
            if (product == null)
                return BadRequest();
            if (product.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "The product shouldn't be empty");
            }
            product.Id = new MongoDB.Bson.ObjectId(id);
            await db.UpdateProduct(product);

            return Created("Created", true);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteProduct(string id)
        {
            await db.DeleteProduct(id);

            return NoContent(); 
        }
    }   
}

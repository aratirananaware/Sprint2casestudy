using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodProjectApi.Models;

namespace FoodProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        fooddbContext db;
        public FoodController(fooddbContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<FoodDetail> GetFoods()
        {
            return db.FoodDetails;
        }
        [HttpPost]
        public IActionResult Post([FromBody] FoodDetail food)
        {
            food.RestaurantName = db.RegisterTbls.Where(x => x.UserName == food.RestaurantUserName).FirstOrDefault().RestaurantName;
            db.FoodDetails.Add(food);
            db.SaveChanges();
            return Ok();
        }
        [HttpPut]
        public string Put([FromBody] FoodDetail food)
        {
            var tblsampleObj = db.FoodDetails.Where(x => x.Id == food.Id);
            if (tblsampleObj != null)
            {
                db.FoodDetails.Update(food);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }
    }
}

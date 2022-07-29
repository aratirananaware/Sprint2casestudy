
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodProjectApi.Models;
using FoodProjectApi.ViewModels;

namespace FoodProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        fooddbContext db;
        public OrderController(fooddbContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<OrderTbl> GetFoods()
        {
            return db.OrderTbls;
        }
        [HttpPost]
        public IActionResult Post([FromBody] OrderViewModel food)
        {

            // db.OrderTbls.Add(food);
            //db.SaveChanges();
            OrderTbl order = new OrderTbl();
            order.Address = food.Address;
            order.Paymentmode = food.Paymentmode;
            order.FirstName = food.FirstName;
            order.LastName = food.LastName;
            order.UserName = food.UserName;
            order.Email = food.Email;
            order.PhoneNo = food.PhoneNo;
            db.OrderTbls.Add(order);
            db.SaveChanges();
            foreach (var item in food.FoodItemIds)
            {
                OrderDetailTbl orderDetails = new OrderDetailTbl();
                var FoodDetails = db.FoodDetailsAdmins.Where(x => x.Id ==item).FirstOrDefault();
                orderDetails.OrderId = order.Id;
                orderDetails.FoodName = FoodDetails.FoodName;
                orderDetails.FoodDescription = FoodDetails.FoodDescription;
                orderDetails.FoodFinal = FoodDetails.FoodFinal;
                orderDetails.FoodMrp = FoodDetails.FoodMrp;
                orderDetails.FoodQty = Convert.ToInt32(FoodDetails.FoodQuantity);
                orderDetails.RestaurantEmail = FoodDetails.RestaurantUserName;
                orderDetails.RestaurantName = FoodDetails.RestaurantName;
                db.OrderDetailTbls.Add(orderDetails);
                db.SaveChanges();
            }
            return Ok();
        }

        [HttpPut]
        public IActionResult Put([FromBody] OrderTbl food)
        {
            var tblsampleObj = db.OrderTbls.Where(x => x.Id == food.Id);
            if (tblsampleObj != null)
            {
                db.OrderTbls.Update(food);
                db.SaveChanges();
                return Ok();
            }

            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] int Id)
        {
            var tblsampleObj = db.OrderTbls.Where(x => x.Id == Id).FirstOrDefault();
            if (tblsampleObj != null)
            {
                db.OrderTbls.Remove(tblsampleObj);
                db.SaveChanges();
                return Ok();
            }

            return BadRequest();
        }
    }
}

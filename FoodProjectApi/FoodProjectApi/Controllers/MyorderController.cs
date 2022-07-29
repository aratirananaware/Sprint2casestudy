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
    public class MyorderController : ControllerBase
    {
        fooddbContext db;
        public MyorderController(fooddbContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<OrderTbl> GetMyOrders(string username)
        {
            return db.OrderTbls.Where(x => x.UserName == username).ToList();
        }
        [Route("myorderdetails")]
        [HttpGet]
        public IEnumerable<OrderDetailTbl> GetMyOrderDetails(int id)
        {
            return db.OrderDetailTbls.Where(x => x.OrderId == id).ToList();
        }

    }
}
using System;
using System.Collections.Generic;

#nullable disable

namespace FoodProjectApi.Models
{
    public partial class RegisterTbl
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Address { get; set; }
        public int? PhoneNo { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? IsAdmin { get; set; }
        public int? IsRestaurant { get; set; }
        public string RestaurantName { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodProjectApi.ViewModels
{
    public class RegisterViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string RestaurantName { get; set; }

        public string Address { get; set; }
        public int? PhoneNo { get; set; }
        public string Email { get; set; }
        public int? IsRestaurant { get; set; }
    }
}

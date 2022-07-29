using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodProjectApi.ViewModels
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNo { get; set; }
        public string Paymentmode { get; set; }
        public string Address { get; set; }
        public string UserName { get; set; }
        public string RestaurantEmail { get; set; }

        public List<int> FoodItemIds { get; set; }
    }
}

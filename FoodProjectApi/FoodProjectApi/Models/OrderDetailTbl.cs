using System;
using System.Collections.Generic;

#nullable disable

namespace FoodProjectApi.Models
{
    public partial class OrderDetailTbl
    {
        public int Id { get; set; }
        public string FoodName { get; set; }
        public string FoodDescription { get; set; }
        public int? OrderId { get; set; }
        public string RestaurantName { get; set; }
        public string RestaurantEmail { get; set; }
        public int? FoodQty { get; set; }
        public decimal? FoodMrp { get; set; }
        public decimal? FoodFinal { get; set; }
    }
}

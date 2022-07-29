using System;
using System.Collections.Generic;

#nullable disable

namespace FoodProjectApi.Models
{
    public partial class FoodDetail
    {
        public int Id { get; set; }
        public string RestaurantName { get; set; }
        public string FoodName { get; set; }
        public string FoodImage { get; set; }
        public string FoodDescription { get; set; }
        public string Place { get; set; }
        public decimal? FoodMrp { get; set; }
        public decimal? FoodDiscount { get; set; }
        public decimal? FoodFinal { get; set; }
        public int? FoodQuantity { get; set; }
        public int? IsActive { get; set; }
        public string RestaurantUserName { get; set; }
    }
}

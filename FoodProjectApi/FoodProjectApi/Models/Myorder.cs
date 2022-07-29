using System;
using System.Collections.Generic;

#nullable disable

namespace FoodProjectApi.Models
{
    public partial class Myorder
    {
        public int Id { get; set; }
        public string FoodName { get; set; }
        public decimal? FoodFinal { get; set; }
        public string FoodImage { get; set; }
    }
}

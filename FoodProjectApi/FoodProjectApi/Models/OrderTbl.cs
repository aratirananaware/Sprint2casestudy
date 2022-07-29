using System;
using System.Collections.Generic;

#nullable disable

namespace FoodProjectApi.Models
{
    public partial class OrderTbl
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNo { get; set; }
        public string Paymentmode { get; set; }
        public string Address { get; set; }
        public string UserName { get; set; }
    }
}

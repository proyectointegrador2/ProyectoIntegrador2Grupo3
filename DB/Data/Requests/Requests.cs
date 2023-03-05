using DB.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB.Data.Requests
{
    public class RequestLogin
    {
        public string Email { get; set; }
        public string Password { get; set; }

        public RequestLogin(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }

    public class RequestSale
    {
        public ProductCart[]? ProductList { get; set; }
        public string PaymentMethod { get; set; }
        public int ClientId { get; set; }

        public RequestSale(string paymentMethod)
        {
            PaymentMethod = paymentMethod;
        }
    }
}

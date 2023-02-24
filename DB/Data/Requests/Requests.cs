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
}

using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SistemaDeInventarioDeVentaDeVehiculos.Data.Entities
{
    public class User : BaseEntity
    {
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public User(string role)
        {
            if (Role.IsNullOrEmpty())
            {
                Role = "usuario";
            }
            else
            {
                if(role == "usuario" || role == "admin")
                {
                    Role = role;
                }
            }
        }

        [MinLength(3)]
        public string Nombre { get; set; }

        [MinLength(3)]
        public string Apellido { get; set; }

        public string? Direccion { get; set; }

        [MaxLength(20)]
        public string? Telefono { get; set; }

        [MaxLength(100)]
        public string Correo { get; set; }

        [MaxLength(20)]
        public string Role { get; set; }
    }
}

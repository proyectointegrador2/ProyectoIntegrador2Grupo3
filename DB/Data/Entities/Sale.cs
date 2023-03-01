using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB.Data.Entities
{
    public class Sale
    {
        protected Sale()
        {
            Estatus = "A";
            FechaVenta = DateTime.Now;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public DateTimeOffset FechaVenta { get; set; }

        [Precision(10, 2)]
        public decimal Total { get; set; }
        public string MetodoPago { get; set; }
        public string Estatus { get; set; }

        public int ClientID { get; set; }

        [ForeignKey("ClientID")]
        public virtual Client Client { get; set; }

        public IEnumerable<SaleDetails> salesDetails { get; set; }
    }
}

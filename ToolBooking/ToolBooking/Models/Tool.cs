using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ToolBooking.Models
{
    public class Tool
    {
        [Key]
        public int ToolID { get; set; }
        public string Toolname { get; set; }
        public int Quantity { get; set; }
    }
}

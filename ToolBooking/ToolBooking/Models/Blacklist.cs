using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ToolBooking.Models
{
    public class Blacklist
    {
        [Key]
        public string UserID { get; set; }
    }
}

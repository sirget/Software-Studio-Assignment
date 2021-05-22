using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ToolBooking.Models
{
    public class BookingDetail
    {
        [Key]
        public int BookingID { get; set; }
        public int ToolID { get; set; }
        public string UserID { get; set; }
        public string start_time { get; set; }
    }
}

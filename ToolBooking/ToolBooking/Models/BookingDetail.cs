using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ToolBooking.Models
{
    public class BookingDetail
    {
        public string id { get; set; }
        public string uid { get; set; }
        public int itemid { get; set; }

        [DataType(DataType.Date)]
        public DateTime start_date { get; set; }

        public BookingDetail()
        {

        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace SSWebapp.Models
{
    public class List
    {
        public string Id { get; set; }
        public int Lab { get; set; }

        [DataType(DataType.Date)]
        public DateTime Bookdate { get; set; }

    }
}

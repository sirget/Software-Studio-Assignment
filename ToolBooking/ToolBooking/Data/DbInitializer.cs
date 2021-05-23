using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToolBooking.Models;

namespace ToolBooking.Data
{
    public class DbInitializer
    {
        public static void Initialize(ToolBookingContext context)
        {
            context.Database.EnsureCreated();

            
            if (context.BookingDetails.Any())
            {
                return;   // DB has been seeded
            }

            var blacklists = new Blacklist[]
            {
            new Blacklist{UserID="61010001"},
            new Blacklist{UserID="61010002"},
            new Blacklist{UserID="61010003"},
            new Blacklist{UserID="61010004"},
            new Blacklist{UserID="61010005"},
            };
            foreach (Blacklist b in blacklists)
            {
                context.Blacklists.Add(b);
            }
            context.SaveChanges();

            var tools = new Tool[]
            {
            new Tool{ToolID=1,Toolname="Voltmeter",Quantity=20},
            new Tool{ToolID=2,Toolname="Arduino",Quantity=20},
            new Tool{ToolID=3,Toolname="Osilloscope",Quantity=20},
            new Tool{ToolID=4,Toolname="Soldering Iron",Quantity=20},
            new Tool{ToolID=5,Toolname="Pliers",Quantity=20},

            };
            foreach (Tool t in tools)
            {
                context.Tools.Add(t);
            }
            context.SaveChanges();

            var bookingdetails = new BookingDetail[]
            {
            new BookingDetail{BookingID=1,ToolID=1,UserID="61010001",start_time="1621670400"},
            new BookingDetail{BookingID=2,ToolID=2,UserID="61010002",start_time="1621670400"},
            new BookingDetail{BookingID=3,ToolID=3,UserID="61010003",start_time="1621670400"},
            new BookingDetail{BookingID=4,ToolID=4,UserID="61010004",start_time="1621670400"},
            };
            foreach (BookingDetail b in bookingdetails)
            {
                context.BookingDetails.Add(b);
            }
            context.SaveChanges();
        }
    }
}

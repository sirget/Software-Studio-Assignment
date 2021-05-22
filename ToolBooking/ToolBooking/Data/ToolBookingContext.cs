using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToolBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace ToolBooking.Data
{
    public class ToolBookingContext : DbContext
    {
        public ToolBookingContext(DbContextOptions<ToolBookingContext> options) : base(options)
        {

        }
        public DbSet<Tool> Tools { get; set; }
        public DbSet<BookingDetail> BookingDetails { get; set; }
        public DbSet<Blacklist> Blacklists { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tool>().ToTable("Tool");
            modelBuilder.Entity<BookingDetail>().ToTable("BookingDetail");
            modelBuilder.Entity<Blacklist>().ToTable("Blacklist");
        }

    }
}

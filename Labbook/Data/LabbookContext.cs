using Microsoft.EntityFrameworkCore;
using Labbook.Models;

namespace Labbook.Data
{
    public class LabbookContext : DbContext
    {
        public LabbookContext (DbContextOptions<LabbookContext> options)
            : base(options)
        {
        }

        public DbSet<Tool> Tool { get; set; }
    }
}
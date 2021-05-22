using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Labbook.Data;
using System;
using System.Linq;

namespace Labbook.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new LabbookContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<LabbookContext>>()))
            {
                // Look for any Tools.
                if (context.Tool.Any())
                {
                    return;   // DB has been seeded
                }

                context.Tool.AddRange(
                    new Tool
                    {
                        LabID = 1,
                        toolName = "Arduino",
                        quantity = 20
                    },

                    new Tool
                    {
                        LabID = 2,
                        toolName = "STM32",
                        quantity = 20
                    },

                    new Tool
                    {
                        LabID = 3,
                        toolName = "LED",
                        quantity = 20
                    },

                    new Tool
                    {
                        LabID = 4,
                        toolName = "LCD",
                        quantity = 20
                    },

                    new Tool
                    {
                        LabID = 5,
                        toolName = "FPGA",
                        quantity = 20
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
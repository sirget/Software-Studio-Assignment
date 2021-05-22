using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Labbook.Models
{
    public class Tool
    {
        public int Id { get; set; }

        [Required]
        public int LabID { get; set; }

        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [StringLength(60, MinimumLength = 2)]
        [Required]
        public string toolName { get; set; }

        [Required]
        public int quantity { get; set; }
    }
}
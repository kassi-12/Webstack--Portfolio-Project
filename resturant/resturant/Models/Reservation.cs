using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace resturant.Models
{
    public class Reservation
    {
        [Key]
        public int IdRes { get; set; } // Primary Key

        [ForeignKey(nameof(Table))]
        public int IdTable { get; set; } // Foreign Key to Table

        public DateTime Date { get; set; }
        public TimeSpan Heure { get; set; }
        public string NomClient { get; set; }
        public string ContactClient { get; set; }

        // Navigation Property
        public Table Table { get; set; }
    }
}

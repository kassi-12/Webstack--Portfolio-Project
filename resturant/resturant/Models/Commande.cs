using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace resturant.Models
{
    public class Commande
    {
        [Key]
        public int IdCommande { get; set; } // Primary Key

        [ForeignKey(nameof(Table))]
        public int IdTable { get; set; } // Foreign Key to Table

        public DateTime Date { get; set; }
        public string EtatCom { get; set; }

        // Navigation Property
        public Table Table { get; set; }
    }
}

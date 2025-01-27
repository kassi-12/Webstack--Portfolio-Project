using System.ComponentModel.DataAnnotations;

namespace resturant.Models
{
    public class Table
    {
        [Key]
        public int IdTable { get; set; } // Primary Key

        public int NumTable { get; set; }
        public int Capacite { get; set; }
        public string Etat { get; set; }

        // Navigation Properties
        public ICollection<Reservation> Reservations { get; set; }
        public ICollection<Commande> Commandes { get; set; }
    }
}

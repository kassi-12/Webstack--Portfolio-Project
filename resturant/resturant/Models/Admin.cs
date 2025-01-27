using System.ComponentModel.DataAnnotations;

namespace resturant.Models
{
    public class Admin
    {
        [Key]
        public int IdAdmin { get; set; } // Primary Key
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public string MotDePasse { get; set; }
    }
}

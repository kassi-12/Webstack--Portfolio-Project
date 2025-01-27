using System.ComponentModel.DataAnnotations;

namespace resturant.Models
{
    public class Plat
    {
        [Key]
        public int IdPlat { get; set; } // Primary Key
        public string NomPlat { get; set; }
        public float Prix { get; set; }
        public string Description { get; set; }
    }
}

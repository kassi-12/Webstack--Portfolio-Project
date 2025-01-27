using System.ComponentModel.DataAnnotations;

namespace resturant.Models
{
    public class Employee
    {
        [Key]
        public int IdEmploye { get; set; } // Primary Key
        public string NomE { get; set; }
        public string PrenomE { get; set; }
        public string Poste { get; set; }
        public float Salaire { get; set; }
    }
}

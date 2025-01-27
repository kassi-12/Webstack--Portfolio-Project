using Microsoft.EntityFrameworkCore;
using resturant.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace resturant
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // DbSet for each entity
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Commande> Commandes { get; set; }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Plat> Plats { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Fluent API configurations for relationships and constraints

            // Reservation - Table relationship
            modelBuilder.Entity<Reservation>()
                .HasOne(r => r.Table)
                .WithMany(t => t.Reservations)
                .HasForeignKey(r => r.IdTable)
                .OnDelete(DeleteBehavior.Cascade);

            // Commande - Table relationship
            modelBuilder.Entity<Commande>()
                .HasOne(c => c.Table)
                .WithMany(t => t.Commandes)
                .HasForeignKey(c => c.IdTable)
                .OnDelete(DeleteBehavior.Cascade);

            // Additional configurations can be added here if needed
        }
    }
}

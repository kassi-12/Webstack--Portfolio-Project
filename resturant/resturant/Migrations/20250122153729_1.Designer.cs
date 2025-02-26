﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using resturant;

#nullable disable

namespace resturant.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20250122153729_1")]
    partial class _1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("resturant.Models.Admin", b =>
                {
                    b.Property<int>("IdAdmin")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdAdmin"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotDePasse")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prenom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdAdmin");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("resturant.Models.Commande", b =>
                {
                    b.Property<int>("IdCommande")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdCommande"));

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("EtatCom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdTable")
                        .HasColumnType("int");

                    b.HasKey("IdCommande");

                    b.HasIndex("IdTable");

                    b.ToTable("Commandes");
                });

            modelBuilder.Entity("resturant.Models.Employee", b =>
                {
                    b.Property<int>("IdEmploye")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdEmploye"));

                    b.Property<string>("NomE")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Poste")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PrenomE")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("Salaire")
                        .HasColumnType("real");

                    b.HasKey("IdEmploye");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("resturant.Models.Plat", b =>
                {
                    b.Property<int>("IdPlat")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdPlat"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomPlat")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("Prix")
                        .HasColumnType("real");

                    b.HasKey("IdPlat");

                    b.ToTable("Plats");
                });

            modelBuilder.Entity("resturant.Models.Reservation", b =>
                {
                    b.Property<int>("IdRes")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdRes"));

                    b.Property<string>("ContactClient")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<TimeSpan>("Heure")
                        .HasColumnType("time");

                    b.Property<int>("IdTable")
                        .HasColumnType("int");

                    b.Property<string>("NomClient")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdRes");

                    b.HasIndex("IdTable");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("resturant.Models.Table", b =>
                {
                    b.Property<int>("IdTable")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdTable"));

                    b.Property<int>("Capacite")
                        .HasColumnType("int");

                    b.Property<string>("Etat")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumTable")
                        .HasColumnType("int");

                    b.HasKey("IdTable");

                    b.ToTable("Tables");
                });

            modelBuilder.Entity("resturant.Models.Commande", b =>
                {
                    b.HasOne("resturant.Models.Table", "Table")
                        .WithMany("Commandes")
                        .HasForeignKey("IdTable")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Table");
                });

            modelBuilder.Entity("resturant.Models.Reservation", b =>
                {
                    b.HasOne("resturant.Models.Table", "Table")
                        .WithMany("Reservations")
                        .HasForeignKey("IdTable")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Table");
                });

            modelBuilder.Entity("resturant.Models.Table", b =>
                {
                    b.Navigation("Commandes");

                    b.Navigation("Reservations");
                });
#pragma warning restore 612, 618
        }
    }
}

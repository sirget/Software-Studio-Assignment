﻿// <auto-generated />
using Labbook.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Labbook.Migrations
{
    [DbContext(typeof(LabbookContext))]
    [Migration("20210522103717_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.6");

            modelBuilder.Entity("Labbook.Models.Tool", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("LabID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("quantity")
                        .HasColumnType("INTEGER");

                    b.Property<string>("toolName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Tool");
                });
#pragma warning restore 612, 618
        }
    }
}

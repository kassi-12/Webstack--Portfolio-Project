using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System;
using resturant.Models;

namespace resturant.Controllers
{
    [ApiController]
    [Route("api/employee")]
    public class EmployeesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EmployeesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetEmployees()
        {
            try
            {
                var employees = _context.Employees
                    .Select(e => new
                    {
                        IdEmploye = e.IdEmploye,
                        NomE = e.NomE,
                        PrenomE = e.PrenomE,
                        Poste = e.Poste,
                        Salaire = e.Salaire
                    })
                    .ToList();

                if (!employees.Any())
                {
                    return NotFound(new { success = false, message = "No employees found." });
                }

                return Ok(new { success = true, data = employees });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            try
            {
                var employee = _context.Employees
                    .Where(e => e.IdEmploye == id)
                    .Select(e => new
                    {
                        IdEmploye = e.IdEmploye,
                        NomE = e.NomE,
                        PrenomE = e.PrenomE,
                        Poste = e.Poste,
                        Salaire = e.Salaire
                    })
                    .FirstOrDefault();

                if (employee == null)
                {
                    return NotFound(new { success = false, message = "Employee not found." });
                }

                return Ok(new { success = true, data = employee });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        [HttpPost("add")]
        public IActionResult CreateEmployee([FromBody] Employee newEmployee)
        {
            if (newEmployee == null)
            {
                return BadRequest(new { success = false, message = "Invalid employee data." });
            }

            try
            {
                var employee = new Employee
                {
                    NomE = newEmployee.NomE,
                    PrenomE = newEmployee.PrenomE,
                    Poste = newEmployee.Poste,
                    Salaire = newEmployee.Salaire
                };

                _context.Employees.Add(employee);
                _context.SaveChanges();

                return Ok(new
                {
                    success = true,
                    message = "Employee created successfully.",
                    employeeId = employee.IdEmploye
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        [HttpPut("edit/{id}")]
        public IActionResult EditEmployee(int id, [FromBody] Employee updatedEmployee)
        {
            if (updatedEmployee == null)
            {
                return BadRequest(new { success = false, message = "Invalid employee data." });
            }

            try
            {
                var employee = _context.Employees.FirstOrDefault(e => e.IdEmploye == id);

                if (employee == null)
                {
                    return NotFound(new { success = false, message = "Employee not found." });
                }

                employee.NomE = updatedEmployee.NomE;
                employee.PrenomE = updatedEmployee.PrenomE;
                employee.Poste = updatedEmployee.Poste;
                employee.Salaire = updatedEmployee.Salaire;

                _context.SaveChanges();

                return Ok(new { success = true, message = "Employee updated successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            try
            {
                var employee = _context.Employees.FirstOrDefault(e => e.IdEmploye == id);

                if (employee == null)
                {
                    return NotFound(new { success = false, message = "Employee not found." });
                }

                _context.Employees.Remove(employee);
                _context.SaveChanges();

                return Ok(new { success = true, message = "Employee deleted successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }
    }
}

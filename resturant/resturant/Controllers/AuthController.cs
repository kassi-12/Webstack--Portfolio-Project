using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Resturant.Models;
using Resturant.Models.Dto;
using resturant;

namespace Resturant.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.MotDePasse))
            {
                return BadRequest(new { success = false, message = "Please fill in both fields." });
            }

            // Authenticate Admin based on Email and MotDePasse
            var admin = _context.Admins
                .FirstOrDefault(a => a.Email == request.Email && a.MotDePasse == request.MotDePasse);

            if (admin != null)
            {
                return Ok(new { success = true, token = "fake-jwt-token" });
            }

            return Unauthorized(new { success = false, message = "Invalid login credentials." });
        }
    }
}

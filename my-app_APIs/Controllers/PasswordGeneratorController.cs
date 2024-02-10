using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace my_app_APIs.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class PasswordGeneratorController : ControllerBase
    {
        [HttpGet("generate_password")]
        public IActionResult GeneratePassword()
        {
            int length = new Random().Next(8, 13);
            string characters = string.Concat(Enumerable.Range(65, 26).Select(x => (char)x)) +
                                string.Concat(Enumerable.Range(97, 26).Select(x => (char)x)) +
                                string.Concat(Enumerable.Range(48, 10).Select(x => (char)x)) +
                                string.Concat("!@#$%^&*()");

            string result = new(Enumerable.Repeat(characters, length)
                .Select(s => s[new Random().Next(s.Length)]).ToArray());

            var response = new { result };

            return Ok(response);
        }
    }
}

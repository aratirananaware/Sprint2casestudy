using FoodProjectApi.Interfaces;
using FoodProjectApi.Models;
using FoodProjectApi.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace FoodProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        fooddbContext db;
        IJWTMangerRepository iJWTMangerRepository;
        public LoginController(fooddbContext _db, IJWTMangerRepository _iJWTMangerRepository)
        {
            db = _db;
            iJWTMangerRepository = _iJWTMangerRepository;
        }

        [HttpGet]
        public IEnumerable<RegisterTbl> Get()
        {
            return db.RegisterTbls;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(RegisterViewModel loginViewModel)
        {
            var token = iJWTMangerRepository.Authenicate(loginViewModel, false);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }
        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterViewModel registerViewModel)
        {
            var token = iJWTMangerRepository.Authenicate(registerViewModel, true);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }
    }
}

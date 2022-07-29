using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodProjectApi.ViewModels;

namespace FoodProjectApi.Interfaces
{
    public interface IJWTMangerRepository
    {
        Tokens Authenicate(RegisterViewModel users, bool IsRegister);
    }
}

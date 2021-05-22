using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Labbook.Controllers
{
    public class LabController : Controller
    {
        // 
        // GET: /HelloWorld/

        public string Index(int ID = 0)
        {

            return "This is my default action...";
        }

        // 
        // GET: /HelloWorld/Welcome/ 

        public string record()
        {
            return "This is the Welcome action method...";
        }

        public string Login()
        {
            return "This is the Welcome action method...";
        }

        public string Register()
        {
            return "This is the Welcome action method...";
        }

        public string Logout()
        {
            return "This is the Welcome action method...";
        }
    }
}
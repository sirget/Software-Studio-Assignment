using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Labbook.Controllers
{
    public class APIController : Controller
    {
        // 
        // GET: /HelloWorld/

        public IActionResult Index(int ID = 0)
        {
            ViewBag.LabID = ID;
            return View();
        }

        // 
        // GET: /HelloWorld/Welcome/ 

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }
}
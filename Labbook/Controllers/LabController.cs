using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Labbook.Controllers
{
    public class LabController : Controller
    {
        // 
        // GET: /HelloWorld/

        public string Index()
        {
            return "This is my default action...";
        }

        // 
        // GET: /HelloWorld/Welcome/ 

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }
}
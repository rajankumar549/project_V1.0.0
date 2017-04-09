using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Helpers;
using System.Web.Mail;
using System.Web.Mvc;

namespace project_V1._0._0.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewData["flag"] = false;
            return View();
           
        }
        [HttpPost]
        public ActionResult Index(FormCollection form)

        {
            string toAddress = form["email"].ToString();
            string phone = form["phone"].ToString();
            string subject = "noreply@xyz.com";
            string body = form["message"].ToString();
            string name = form["name"].ToString();
            string result = "Message Sent Successfully..!!";
            string senderID = "rajankumar549@gmail.com";// use sender’s email id here..
            const string senderPassword = "linux@7895"; // sender password here…
            
         
                WebMail.Send("rajankumar549@gmail.com",
                             subject,
                              "Email: " + body + "\n"
                              + "Name: " + name + "\n"
                              + "Mob No: " + phone + "\n"
                              + "Message: <" + body + ">\n",

                   null,
                    null,
                    null,
                    true, 
                    null,
                    null,
                    null,
                    null,
                    null,
                   null);
                
            
           
            return View();
        }


    }
}
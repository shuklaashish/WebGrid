﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication15.Controllers
{
    public class AjaxController : Controller
    {
        //
        // GET: /Ajax/
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult InsertFile(HttpPostedFileBase file)
        {
          //  var file = HttpContext.Request[""];
         //var html = System.IO.File.rr
            BinaryReader b = new BinaryReader(file.InputStream);
            byte[] binData = b.ReadBytes((int)file.InputStream.Length);
            string result = System.Text.Encoding.UTF8.GetString(binData);
             return View();
        }

        //
        // GET: /Ajax/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Ajax/Create
        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Ajax/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Ajax/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Ajax/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Ajax/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Ajax/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}

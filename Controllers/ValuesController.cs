using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace WebApplication15.Controllers
{
    public class Employee
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public int Age { get; set; }
    }

    public class ValuesController : ApiController
    {
        List<Employee> EmployeeList;
        public ValuesController()
        {
            if(HttpContext.Current.Session["EmployeeList"]==null)
            {
                EmployeeList = new List<Employee> { 
                new Employee{Name="Ashish",Id=1,Age=25},
                new Employee{Name="Ajay",Id=2,Age=28},
                new Employee{Name="Amit",Id=3,Age=32},
                new Employee{Name="Priya",Id=4,Age=35}
            };
                HttpContext.Current.Session["EmployeeList"] = EmployeeList;
            }
            else
            {
                EmployeeList = (List<Employee>)HttpContext.Current.Session["EmployeeList"];
            }
          
        }
        // GET api/values
        public IEnumerable<Employee> Get()
        {
            return EmployeeList;
        }

        // GET api/values/5
        public Employee Get(int id)
        {
            Employee e = EmployeeList.Where(x => x.Id == id).FirstOrDefault();
            return e;
        }

        // POST api/values
        public void Post([FromBody]string employee)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Employee employee)
        {
            Employee e = EmployeeList.Where(x => x.Id == id).FirstOrDefault();
            int index=EmployeeList.IndexOf(e);
            EmployeeList.Remove(e);
            EmployeeList.Insert(index, employee);
            
            HttpContext.Current.Session["EmployeeList"] = EmployeeList;
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            Employee e = EmployeeList.Where(x => x.Id == id).FirstOrDefault();
            EmployeeList.Remove(e);
            HttpContext.Current.Session["EmployeeList"] = EmployeeList;

        }
    }
}

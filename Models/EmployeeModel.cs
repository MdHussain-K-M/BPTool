using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BPTool.SqlHelper;
using System.Data;
using System.Data.SqlClient;

namespace BPTool.Models
{
    public class EmployeeModel
    {
        public string empID { get; set; }
        public string empName { get; set; }
        public string empSalary { get; set; }
        public string DeptName { get; set; }
        public string DesigName { get; set; }

      
    }

    public class EmployeeRepository
    {
        public IEnumerable<EmployeeModel> getAllEmployee()
        {
            List<EmployeeModel> empList = new List<EmployeeModel>();
            SqlDataReader sdr = DBTask.ExecuteReader(Startup.ConnectionStringTS, "spGetEmployee", "GetAll","","","","","");
            if (sdr.HasRows)
            {
                while (sdr.Read())
                {
                    var emp = new EmployeeModel
                    {
                        empID = Convert.ToString(sdr["empID"]),
                        empName = Convert.ToString(sdr["empName"]),
                        empSalary = Convert.ToString(sdr["empSalary"]),
                        DeptName = Convert.ToString(sdr["DeptName"]),
                        DesigName = Convert.ToString(sdr["DesigName"])
                    };
                    empList.Add(emp);
                }
            }
            return empList;
        }
    }
}

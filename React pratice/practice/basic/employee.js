
import { useState } from "react";

const Employee=()=>{
    let [employeename,updateemployee] = useState({});
    let [empolyeelist,updatelist]= useState([]);
    const processValue=(data)=>{
        employeename[data.target.name]=data.target.value;
        updateemployee(employeename);
    }
    const save=(obj)=>{
        obj.preventDefault();
        obj.target.reset();
        updatelist([...empolyeelist,employeename]);
        updateemployee({});
    }

    const delemployee=(index)=>{
        empolyeelist.splice(index,1);
        updatelist([...empolyeelist]);
    }
        return(

            <div className="two">
                <form onSubmit={save}>
                <h1> React Assignment - To Collect Data Using Object</h1>
                <p>Employee Name: <input type="text" name="ename" onChange={processValue}/></p>
                <p>Employee Salary: <input type="text" name="salary" onChange={processValue}/></p>
                <p>Employee Department: <input type="text" name="dpt" onChange={processValue}/></p>
                <p>Employee Mobile No: <input type="text" name="mobile" onChange={processValue}/></p>
                <button type="submit"> Save </button>
                <button type="reset"> Reset</button>
                </form>
                {
                    empolyeelist.map((employee,index)=>{
                        return(
                            <div className="container">
                            <div className="box-1" key={index}>
                            <h2>    {employee.ename}</h2>
                            <p> {employee.salary}</p>
                            <p>{employee.dpt}</p>
                            <p>{employee.mobile}</p>
                            <button onClick={delemployee.bind(this,index)}> Delete</button>
                            </div>
                            </div>
                        )
                    })
                }
            </div>


        )
}

export default Employee;
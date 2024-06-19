import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const ManageEmployee =()=>{
    let [allemp, updateEmp] = useState( [] );

    const getEmployee = ()=>{
        fetch("http://localhost:1234/emplist")
        .then(response=>response.json())
        .then(empArray=>{
                updateEmp(empArray.reverse());//reverse used for newly added at top
        })
    }
    useEffect(()=>{
        getEmployee();
    },[])

        let [newemp, processEmp] = useState({});
        const pickDetails = (obj) =>{
            newemp[obj.target.name] = obj.target.value;
            processEmp(newemp);
        }

        // state variable to handle error message
        let [nameError,updateNameError] = useState("");
        let [salaryError,updateSalaryError] = useState("");
        let [cityError,updateCityError] = useState("");
        let [educationError,updateEducationError] = useState("");
        let [skillError,updateSkillError] = useState("");
        const save=(formObj)=>{
            formObj.preventDefault();
            let formstatus = true;

            if(newemp.empname===undefined || newemp.empname ===""){
                formstatus= false;
                updateNameError("Invalid Name");
            }else{
                updateNameError("");
            }

            //salary Vaildation
            if(newemp.salary===undefined || newemp.salary==="" || isNaN(newemp.salary)){
                formstatus= false;
                updateSalaryError("Invalid Salary");
            }else{
                updateSalaryError("");
            }
            //city Validation
            if(newemp.city===undefined || newemp.city ===""){
                formstatus= false;
                updateCityError("Invalid City");
            }else{
                updateCityError("");
            }
            //Education Validation
            if(newemp.education===undefined || newemp.education ===""){
                formstatus= false;
                updateEducationError("Invalid Education");
            }else{
                updateEducationError("");
            }
            //Skill Validation
            if(newemp.skill===undefined || newemp.skill ===""){
                formstatus= false;
                updateSkillError("Invalid Skill");
            }else{
                updateSkillError("");
            }
            if(formstatus===true){
            let url = "http://localhost:1234/emplist"
            let postData={
                headers:{'Content-Type':'appilication/json'},
                method:"post",
                body:JSON.stringify( newemp )
            }
            fetch(url,postData)
            .then(response=>response.json())
            .then(empdata=>{
                alert(empdata.id + " : is new employee id")
                formObj.target.reset(); //to clear the form data
                getEmployee();//to reload the emp list
                processEmp({})
            })
        }

    }
        const delEmp = async(empid)=>{
            let url = "http://localhost:1234/emplist/"+empid;
            let postData = {method:"delete"};
            try{
                await fetch(url,postData)
                .then(response=>response.json())
                .then(empinfo=>{
                    alert(empinfo.empname + "- Deleted Successfully !");
                    getEmployee();
                })
            }catch(error){
                alert("Network Error ! Try later")                
            }
        }
    return(
        <div className='container'>
            <h1 align="center"> Api Based CRUD Operation</h1>
            {/* create read update deleting */}
            <div align="center">
                <div>{nameError}</div>
                <div>{salaryError}</div>
               <div> {cityError}</div>
               <div> {educationError}</div>
               <div> {skillError}</div>
                <form  onSubmit={save}>
                    <input type='text' className='smallinput' placeholder='Empolyee Name' name="empname" onChange={pickDetails} />
                    <input type='text' className='smallinput' placeholder='Empolyee Salary' name='salary' onChange={pickDetails}/>
                    <input type='text' className='smallinput' placeholder='Empolyee City' name='city' onChange={pickDetails}/>
                    <input type='text' className='smallinput' placeholder='Empolyee Education' name='education' onChange={pickDetails}/>
                    <input type='text' className='smallinput' placeholder='Empolyee Skill' name='skill' onChange={pickDetails}/>
                    <button>Save Empolyee </button>
                </form>
            </div>
            <p align="center"> Available Employee : {allemp.length}</p>
            <table align='center'>
              <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>Emp Name</th>
                    
                    <th>Salary</th>
                    <th>City</th>
                    <th>Education</th>
                    <th>Skill</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    allemp.map((emp,index)=>{
                        return(
                           
                                 <tr key={index}>
                                <td>{emp.id}</td>
                                <td>{emp.empname}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.city}</td>
                                <td>{emp.education}</td>
                                <td>{emp.skill}</td>
                                <td>
                                    {/* "/editemp/"+emp.id */}
                                    <Link to={`/editemp/${emp.id}`}>
                                        {/*  */}
                                    <button>Edit</button>
                                    </Link>
                                    <button onClick={delEmp.bind(this,emp.id)}>Delete</button>
                                </td>
                                 </tr>
                           
                           
                        )
                    })
                }
                </tbody>
             
            </table>
        </div>
    )
}

export default ManageEmployee;
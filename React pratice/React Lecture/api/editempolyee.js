import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  let { empid } = useParams();
  let [fullname, pickName] = useState("");
  let [empsalary, pickSalary] = useState("");
  let [empcity, pickCity] = useState("");
  let [empskill, pickSkill] = useState("");
  let [empedu, pickEdu] = useState("");
  const getDetails = async () => {
    let url = "http://localhost:1234/emplist/" + empid;
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((empinfo) => {
          console.log(empinfo);
          pickName(empinfo.empname);
          pickSalary(empinfo.salary);
          pickCity(empinfo.city);
          pickEdu(empinfo.education);
          pickSkill(empinfo.skill);
          return empinfo;
        });
    } catch (error) {
      alert("Network Error ! Try later");
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  //state variable to handle the error message
  const save = async(obj) => {
    obj.preventDefault();
    let empinfo = {
      empname: fullname,
      salary: empsalary,
      city: empcity,
      education: empedu,
      skill: empskill,
    };
    let url = "http://localhost:1234/emplist/" + empid ;
    let postData={
      headers:{'Content-Type':'appilication/json'},
      method:"put",
      body:JSON.stringify( empinfo )
  }
  try{
     await fetch(url,postData)
     .then(response=>response.json())
     .then(info=>{
        alert(info.empname + " - Updated Successfully !")
     })

    }catch(error){
      alert("Network Error Try Later !")
    }
  };
  return (
    <div className="container">
      <h1 align="center"> Edit Empolyee - {empid}</h1>
      <div align="center">
        <form onSubmit={save}>
          <input
            type="text"
            className="smallinput"
            placeholder="Empolyee Name"
            name="empname"
            onChange={obj=>pickName(obj.target.value)}
            value={fullname}
          />
          <input
            type="text"
            className="smallinput"
            placeholder="Empolyee Salary"
            name="salary"
            onChange={obj=>pickSalary(obj.target.value)}
            value={empsalary}
          />
          <input
            type="text"
            className="smallinput"
            placeholder="Empolyee City"
            name="city"
            onChange={obj=>pickCity(obj.target.value)}
            value={empcity}
          />
          <input
            type="text"
            className="smallinput"
            placeholder="Empolyee Education"
            name="education"
            onChange={obj=>pickEdu(obj.target.value)}
            value={empedu}
          />
          <input
            type="text"
            className="smallinput"
            placeholder="Empolyee Skill"
            name="skill"
            onChange={obj=>pickSkill(obj.target.value)}
            value={empskill}
          />
          <button> Update Empolyee </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;

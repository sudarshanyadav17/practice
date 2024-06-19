import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const ManageEducation = () => {
  let [educationData, updateEducation] = useState({});
  const pickData = (obj) => {
    educationData[obj.target.name] = obj.target.value;
    updateEducation(educationData);
  };
  let dispatch = useDispatch();
  const save = (obj) => {
    obj.preventDefault();
    let dispatchdata = { type: "neweducation", eduinfo: educationData };
    dispatch(dispatchdata);
    obj.target.reset();
  };
  const alledu = useSelector((state) => state.Educationlist);
  return (
    <div className="container-1" align="center">
      <h1> Education Details</h1>
         <form onSubmit={save}>
        <div className="">
          <div className="box-2">
            <div className="line-2">College Name :{" "}</div>
            <div className="input-1"><input type="text" name="college" onChange={pickData} />{" "}</div>
          </div> 
          <div className="box-2">
          <div className="line-2">Graduation CGPA:{" "}</div>
          <div className="input-1"> <input type="text" name="cgpa" onChange={pickData} />{" "}</div> 
          </div>
          <div className="box-2">
            {" "}<div className="line-2">12th Standard Marks:{" "}</div>
          <div className="input-1" ><input type="text" name="intercollege" onChange={pickData} />{" "}</div>
          </div>
          <div className="box-2">
            <div className="line-2">Marticulation/10th Standard CGPA:{" "}</div>
          <div  className="input-1"><input type="number" name="intermarks" onChange={pickData} />{" "}</div>
          </div>
          <button className="but">Save</button>
        </div>
      </form>
      <h3>Available Education : {alledu.length}</h3>
    </div>
  );
};

export default ManageEducation;

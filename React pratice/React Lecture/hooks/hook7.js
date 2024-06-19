import { useState } from "react";
const Hookseven = () => {
  let [username, updateuser] = useState("");
  let [username1, updateuser1] = useState("");
  let [username2, updateuser2] = useState("");
  let [username3, updateuser3] = useState("");

  const ProcessValue = (para) => {
    // username[para.target.name] =  para.target.value;
    updateuser(para.target.value);
  };

  const ProcessValue1 = (para1) => {
    // username[para.target.name] =  para.target.value;
    updateuser1(para1.target.value);
  };
  const ProcessValue2 = (para2) => {
    // username[para.target.name] =  para.target.value;
    updateuser2(para2.target.value);
  };
  const ProcessValue3 = (para3) => {
    // username[para.target.name] =  para.target.value;
    updateuser3(para3.target.value);
    console.log(username3);
  };

  return (
    <div className="flex">
        <div className="box"> 
        <p className="head">Enter Your Data</p>
       <p>
        Name  : <input type="text" name="cname" onChange={ProcessValue} />
      </p>
      <p>
        Email-Id : <input type="text" name="email" onChange={ProcessValue1} />
      </p>
      <p>
        Mobile : <input type="text" name="mobile" onChange={ProcessValue2} />
      </p>
      <p>Skills: </p>
      <textarea cols="30" rows="5" onChange={ProcessValue3} />
      </div>
      <div className="box">
        <p className="head">Personal Details</p>
        <p> Your Name :  {username}</p>
        <p> Your Email-Id:  {username1}</p>
        <p> Your Mobile: {username2}</p>
        <hr size="1" color="black" width="100px"/>
        <p className="head">My Skills</p>
        <p> Your Skills: {username3}</p>
      </div>
    
      <br />
    </div>
  );
};

export default Hookseven;

       
import { useState, useEffect } from "react";

const TourPackage = () => {

   // save the value
   let [placeData, processData] = useState( {} );

   const pickValue = (obj) =>{
       placeData[obj.target.name] = obj.target.value;
       processData( placeData );
   }
   
   let[msg, updateMsg] = useState("");
   const save = (obj) =>{
       obj.preventDefault();
       placeData["agentid"] =  localStorage.getItem("mytoken");
       updateMsg("Please Wait...");
       let url = "https://cybotrix.com/webapi/holiday/savepackage";   // post {email: "hr@gmail.com", password: "1234" }
       let postData = {
          headers:{'Content-Type':'application/json'},
          method:'post',
          body:JSON.stringify(placeData)
       }
       fetch(url, postData)
       .then(response=>response.text())
       .then(info=>{
           updateMsg(info);
           obj.target.reset();   
         getPackage();     // to reload the list     
       })
   }

   let [allpackage, updatePackage] = useState([]);

   const getPackage =()=>{
   let agendid = localStorage.getItem("mytoken");
    let url = "https://cybotrix.com/webapi/holiday/allpackage";   // post {email: "hr@gmail.com", password: "1234" }
    let postData = {
       headers:{'Content-Type':'application/json'},
       method:'post',
       body:JSON.stringify({"agentid":agendid})
    }
    fetch(url, postData)
    .then(response=>response.json())
    .then(info=>{
         updatePackage(info);
    })
   }
   useEffect(()=>{
    getPackage();
   })

  return (
    <div className="container mt-5">

      <form onSubmit={save}>
      <div className="row">
        <h3 className="text-center col-lg-12 mb-4">Create Tour Package</h3>
        <p className="text-center text-danger"> {msg} </p>
        <div className="col-xl-3 mb-3">
          <label>Package Name</label>
          <input type="text" className="form-control" name="pname" onChange={pickValue}/>
        </div>
        <div className="col-xl-3 mb-3">
          <label>No Of Days</label>
          <select className="form-select" name="days" onChange={pickValue}>
            <option>Choose</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="col-xl-3 mb-3">
          <label>Package Photo</label>
          <input type="text" className="form-control" name="photo" onChange={pickValue}/>
        </div>
        <div className="col-xl-3 mb-3">
          <label>Cost Per Person</label>
          <input type="text" className="form-control" name="cost" onChange={pickValue}/>
        </div>
        <div className="col-xl-2 mb-3">
          <label>Food</label>
          <select className="form-select" name="food" onChange={pickValue}>
            <option>Choose</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-xl-2 mb-3">
          <label>Transport</label>
          <select className="form-select" name="transport" onChange={pickValue}>
            <option>Choose</option>
            <option>car</option>
            <option>Mini Bus</option>
            <option>Flight</option>
            <option>Train</option>
          </select>
        </div>
        <div className="col-xl-2 mb-3">
          <label>Accomodation</label>
          <select className="form-select" name="accomodation" onChange={pickValue}>
            <option>Choose</option>
            <option>yes</option>
            <option>no</option>
          </select>
        </div>
        <div className="col-lg-2">
            <br/>
          <button type="submit" className="btn btn-primary me-3">
            submit
          </button>
          <button type="reset" className="btn btn-warning">
            reset
          </button>
        </div>
      </div>

      </form>

      <div className="row mt-5 mb-4">
            <h3 className="text-danger col-lg-8 mb-4">Available Package : {allpackage.length} </h3>
            <div className="col-lg-4">
                  <input type="text" className="form-control" placeholder="search"/>
            </div>
          </div>
              {
                allpackage.map((mypackage, index)=>{
               return(
                  <div className="row mb-4 border p-3" key={index}>
                    <div className="col-lg-10 col-9">
                       <h4> {mypackage.pname} </h4>
                       <div className="row">
                        <div className="col-lg-5">  <img src={mypackage.photo} height="250" width="250"/> </div>
                       <div className="col-lg-7">
                        <p> Total : {mypackage.days} </p>
                        <p> Food Free : {mypackage.food} </p>
                        <p>  Transport Free: {mypackage.transport} </p>
                        <p>  Accomodation Free: {mypackage.accomodation} </p>
                       </div>
                       </div>        
                       </div>
                    <div className="col-lg-2 col-3 text-end pt-5">
                      <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#myplace"> Add Place </button>
                    </div>
                  </div>
               )
              })
            }

<div className="modal fade" id="myplace" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" 
data-bs-backdrop="static" data-bs-keyboard="false">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default TourPackage;
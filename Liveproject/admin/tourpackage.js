import { useState, useEffect } from "react";

const TourPackage=()=>{

    return(
        <div className="container">
            <div className="row">
                <h3 className="text-center col-lg-12 mb-4">Create Tour Package </h3>
            <div className="col-xl-3 mb-3">
            <label> Package Name </label>
            <input type="text" className="form-control" />
          </div>
            <div className="col-xl-3 mb-3">
            <label> No of Days </label>
            <select className="form-select">
              <option>Choose</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div> 
          <div className="col-xl-3 mb-3">
            <label> Package Photo </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-xl-3 mb-3">
            <label> Cost Each Person </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-xl-2 mb-3">
            <label> Food  </label>
            <select className="form-control" >
                <option>Choose</option>
                <option>Yes</option>
                <option>No</option>
               
                </select>
          </div>
         
          <div className="col-xl-2 mb-3">
            <label> Transportation  </label>
            <select className="form-control" >
                <option>Choose</option>
                <option>Car</option>
                <option>Mini Bus</option>
                <option>Flight</option>
                <option>Train</option>
            </select>
          </div>
          <div className="col-xl-2 mb-3">
            <label> Accomodation  </label>
            <select className="form-control" >
                <option>Choose</option>
                <option>Yes</option>
                <option>No</option>
            </select>
          </div>
          <div className="col-xl-3">
           <button type="submit" className="btn btn-primary m-3"> Submit</button>
           <button type="reset" className="btn btn-warning">Reset</button>
          </div>


          
        </div>
        <div className="row mt-5 mb-4">
            <h3 className="text-center col-lg-8 mb-4">Available Packages</h3>
            <div className="col-lg-4">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        </div>
        <div className="row mb-4 shadow-lg rounded p-3">
                <div className="col-lg-10">
                    ksdkadh akhk hda jdja dlajdl sjda  dadada ad sdasd adadda ada d
                </div>
                <div className="col-lg-2 text-end">
                    <button className="btn btn-info"> Add Places </button>
                </div>
        </div>
        <div className="row mb-4 shadow-lg rounded p-3">
                <div className="col-lg-10">
                    ksdkadh akhk hda jdja dlajdl sjda  dadada ad sdasd adadda ada d
                </div>
                <div className="col-lg-2 text-end">
                    <button className="btn btn-info"> Add Places </button>
                </div>
        </div>

        </div>
    )
}

export default TourPackage;
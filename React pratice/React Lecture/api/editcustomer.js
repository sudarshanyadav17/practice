import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCustomer=()=>{
    let {customerid}=useParams();
    let [fname,pickName] =  useState("");
    let [city,pickCity] = useState("");
    let [mobile,pickMobile] = useState("");

    const getDetails= async() =>{
        let url = "http://localhost:1234/customerlist/" + customerid;
        try{
            await fetch(url)
            .then(response=>response.json())
            .then(customerinfo=>{
                pickName(customerinfo.fullname);
                pickCity(customerinfo.city);
                pickMobile(customerinfo.mobile);
            })
        }catch(error){
            alert("Network Error ! Try Again");
        }
    }
    useEffect(()=>{
        getDetails();
    },[]);
    //state variable to manage error
    let [nameError,updateNameError] = useState("");
    let [cityError,updateCityError] = useState("");
    let [mobileError,updateMobileError] = useState("");

    
    const save=async(obj)=>{
        obj.preventDefault()
        let customerinfo={fullname:fname,city:city,mobile:mobile};
        let url = "http://localhost:1234/customerlist/" +customerid;
        let postData={
            headers:{'Content-Type':'application/json'},
            method:"put",
            body:JSON.stringify( customerinfo )
        }
        try{
            await fetch(url,postData)
            .then(response=>response.json())
            .then( info=>{
                alert( info.fullname + "- Updated Successfully !")
            })
        }catch(error){
            alert("Network Error Try Again !")
        }
    }
    return(
        <div className="container">
            <h1>Edit Customer - {customerid}</h1>
            <div>
                
                <form onSubmit={save}>
                <input type='text' className='smallinput' placeholder='Enter Customer Name' name='fullname' onChange={obj=>pickName(obj.target.value)} value={fname} />
                <input type='text' className='smallinput' placeholder='Enter City' name='city' onChange={obj=>pickCity(obj.target.value)} value={city} />
                <input type='text' className='smallinput' placeholder='Enter Mobile No' name='mobile' onChange={obj=>pickMobile(obj.target.value)} value={mobile} />
                <button>Update Customer </button>
                </form>
            
            </div>
        </div>
    )

}

export default EditCustomer;
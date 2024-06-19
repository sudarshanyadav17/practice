
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const ManageCustomer=()=>{
    let [allcustomer,updatecustomer]=useState([])

    const getCustomer=()=>{
        fetch("http://localhost:1234/customerlist")
        .then(response=>response.json())
        .then(customerArray=>{
            updatecustomer(customerArray.reverse())
        })
    }
    useEffect(()=>{
        getCustomer();
    },[])

    let [newcustomer,updatelist]=useState({})
    
    const pickCustomer=(obj)=>{
        newcustomer[obj.target.name]= obj.target.value;
        updatelist(newcustomer);
    }
    // state variable to handle error
    let [nameError,updateNameError] = useState("");
    let [cityError,updateCityError] = useState("");
    let [mobileError,updateMobileError] = useState("")


    const save=(formobj)=>{
        formobj.preventDefault();
        let formstatus = true;
        
    //Customer Name Validation
    if(newcustomer.fullname===undefined || newcustomer.fullname===""){
        formstatus= false;
        updateNameError("Invalid Name");
    }else{
        updateNameError("");
    }
    //Customer City vaildation
    if(newcustomer.city===undefined || newcustomer.city===""){
        formstatus=false;
        updateCityError("Invaild City");
    }else{
        updateCityError("")
    }
    //Customer Mobile No Vaildation
    if(newcustomer.mobile===undefined || newcustomer.mobile==="" || isNaN(newcustomer.mobile)){
        formstatus=false;
        updateMobileError("Invalid Mobile No");

    }else{
        updateMobileError("");
    }
    if(formstatus===true){
        let url= "http://localhost:1234/customerlist"
        let postData={
            headers:{'Content-Type':'application/json'},
            method:"post",
            body:JSON.stringify( newcustomer )
        }
        fetch(url,postData)
        .then(response=>response.json())
        .then(customerdata=>{
            alert(newcustomer.fullname +": is new customer id")
            formobj.target.reset();
            getCustomer();
        })
    }
    }
    const delCustomer= async(customerid)=>{
        let url = "http://localhost:1234/customerlist/" + customerid;
        let postData = {method : "delete"}
        try{
            await fetch(url,postData)
            .then(response=>response.json())
            .then(customerninfo=>{
                alert(customerninfo.fullname + "- Deleted Successfully ");
                getCustomer();
            })
        }catch(error){
            alert("Network Error ! Try Later");
        }
    }
    return(
        <div className='container'>
            <h1 align="center"> Api Based CRUD Operation for Customer Details</h1>
            <p align="center">Available Customers : {allcustomer.length}</p>
            <div align="center">{nameError}</div>
            <div align="center">{cityError}</div>
            <div align="center">{mobileError}</div>

            <div align="center">
                <form onSubmit={save}>
                <input type='text' className='smallinput' placeholder='Enter Customer Name' name='fullname' onChange={pickCustomer} />
                <input type='text' className='smallinput' placeholder='Enter City' name='city' onChange={pickCustomer} />
                <input type='text' className='smallinput' placeholder='Enter Mobile No' name='mobile' onChange={pickCustomer} />
                <button>Save Customer </button>
                </form>
            </div>
            <table align='center'>
                <thead>
                    <th>Customer Id</th>
                    <th>Customer Name</th>
                    <th>Customer City</th>
                    <th>Customer Mobile</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        allcustomer.map((customer,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{customer.id}</td>
                                    <td>{customer.fullname}</td>
                                    <td>{customer.city}</td>
                                    <td>{customer.mobile}</td>
                                    <td>
                                        
                                        <Link to={`/editcustomer/${customer.id}`}>
                                        <button>Edit</button>
                                        </Link>
                                       <button onClick={delCustomer.bind(this,customer.id)}>Delete</button>
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

 

export default ManageCustomer;
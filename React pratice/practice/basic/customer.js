import { useState } from "react";

const Customer=()=>{
    let [customername,updatecustomer]=useState({});
    let [customerlist,updatelist]=useState([]);
    const processValue=(para)=>{
        customername[para.target.name]= para.target.value;
        updatecustomer(customername);
    }
    const save=(obj)=>{
        obj.preventDefault();
        obj.target.reset();
        updatelist([...customerlist,customername]);
        updatecustomer({});

    }
    const delcustomer=(index)=>{
        customerlist.splice(index,1);
        updatelist([...customerlist]);
    }

    return(
        <div className="two">
            <form onSubmit={save}> 
            <h1>  React Assignment - To Collect Data Using Object </h1>
            <p>Customer Name : <input type="text" placeholder="Enter Your Name" name="cname" onChange={processValue}/></p>
            <p>Customer ID :  <input type="text" placeholder="Enter Your Id" name="id" onChange={processValue}/></p>
            <p>Customer Mobile No : <input type="text" placeholder="Enter Your Mobile No" name="mobile" onChange={processValue}/></p>
            <p>Customer Email-Id: <input type="text" placeholder="Enter Your Email-Id" name="email" onChange={processValue}/></p>
            <button type="submit">Save </button>
            <button type="reset">Reset</button>
            </form>
            {
                customerlist.map((customer,index)=>{
                    return(
                        <div className="container">
                        <div className="box-1" key={index}>
                        <h2>{customer.cname} </h2>
                        <p>{customer.id}</p>
                        <p>{customer.mobile}</p>
                        <p>{customer.email}</p>
                        <button onClick={delcustomer.bind(this,index)}> Delete</button>
                        </div>
                    </div>
                    )
                })

            }
        </div>
    )
}

export default Customer;
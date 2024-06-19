 import React from "react";

 const Myname =()=>{
    const namelist=[
        ["chinna","sudarshan","satish","yadav"],
        ["Btech","Bcom","Bsc","MCA"]

    ]
    return ( 
        <div className="container">
        <h1>NameList</h1>
         {namelist.map((name,index)=>{
             return <div className="three" key={index}>
                    {name.map((edu,no)=>{
                        return <div key={no}>{edu}</div>
                    })}
                </div>
        })}
       
        </div>
    )
 }
 export default Myname;
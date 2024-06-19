import React from "react";

const Mycity =()=>{

    const city =['Pune','Hyderabad','Bangalore','Chennai','Indore']    
   return ( 
       <div className="container">
       <h1>City List</h1>
      {city.map((cityname,index)=>{
                return <p key={index} className="three">{cityname}</p>
      })}
      
       </div>
   )
}
export default Mycity;
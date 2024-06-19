import { useState } from "react";

const City=()=>{
    let [cityname,updatecity]= useState("")
    let [citylist,updatelist]= useState([])
    const processdata=(param)=>{
        // cityname[param.target.name] = param.target.value;
        updatecity(param.target.value);
    }

    const save=()=>{
        updatelist([...citylist,cityname])
        alert(cityname)
        updatecity("");
        
    }

    const deletecity=(index)=>{
        citylist.splice(index,1)
        updatelist([...citylist])
    }

        return(
            <div className="single">
                <h1> React Assignment - To Collect Data By Using Single Dimensional Array</h1>
                 <p align='center'> Enter Your CityName : <input type="text" onChange={processdata} value={cityname}/>
                 <button onClick={save}> Save </button>
                 </p>
                 <p align='center'>  Available Cities : {citylist.length}</p>
                
                 {
                    citylist.map((city,index)=>{
                        return(
                           <div className="container">
                            <div className="box">
                                <h2 key={index}> {city}</h2>
                                 <button onClick={deletecity.bind(this,index)}> Delete</button>
                            </div>
                            </div>
                            
                        )
                    })
                 }
            </div>
        )
}

export default City;

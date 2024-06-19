
import {useState} from 'react';

const Apione=()=>{

    let [citylist,updatecity] = useState([])
    const getCity=()=>{
    fetch("city.json")
    .then((response)=>response.json())
    .then((cityArray)=>{
       
        updatecity(cityArray);
    });
    }
    

    return(
        <div>
            <button onClick={getCity}>City</button>
            <div>
            {
                citylist.map((cityName,index)=>{
                    return(
                    <p key={index}>{cityName}</p>
                )
                })
            }
            </div>
           
        </div>
    )
}

export default Apione;
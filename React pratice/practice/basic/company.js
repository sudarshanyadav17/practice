import { useState } from "react";

const Company=()=>{
    let [companyname,updatename]= useState("");
    let [companylist,updatelist] = useState([])

    const processvalue=(cname)=>{
        updatename(cname.target.value);
    
    }
    const save=()=>{
        updatelist([...companylist,companyname]);
        updatename("");
    }
    const deletecompany=(index)=>{
        companylist.splice(index,1);
        updatelist([...companylist]);
    }
    

    return(
        <div className="single">
            <h1> React Assignment - To Collect Data Using Single Dimensional Array</h1>
            <p align='center'> Company Name : <input type="text" onChange={processvalue} value={companyname}/>
                <button onClick={save}> Save </button>
            </p>
            <p align="center"> Available Companies : {companylist.length} </p>
            {
                companylist.map((company,index)=>{
                    return (
                        <div className="container">
                            <div className=" box ">
                            <h2 key={index}>
                                {company}
                            </h2>
                            <button onClick={deletecompany.bind(this,index)}>Delete</button>
                        </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Company;
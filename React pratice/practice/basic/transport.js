import { useState } from "react";
const Transport=()=>{
    let [vehicleName,updateVehicle]= useState({});
    let [vehicleList,updatelist] = useState([]);
    
    const processValue=(para)=>{
        vehicleName[para.target.name]=para.target.value;
        updateVehicle(vehicleName);
        // console.log(vehicleName);
    }  
    const save=(obj)=>{
        obj.preventDefault();
        obj.target.reset();
        updatelist([...vehicleList,vehicleName]);
        updateVehicle({});
    }  
    const delvehicle=(index)=>{
        vehicleList.splice(index,1);
        updatelist([...vehicleList]);
    }
    return(
        <div className="container-1">
            
            <div className="box-1">
            <form onSubmit={save}>
                <div className="head"><span>New Transport</span></div>
                <div className="line-1"><span>Transport Number</span></div>
                <div className="input"><input type="text" name="tname" onChange={processValue}/></div>
                <div className="line-1"><span>Root Name</span></div>
                <div className="input"><input type="text" name="rname" onChange={processValue}/></div>
                <div className="line-1"><span>Size</span></div>
                <div className="input"><select name="size" id="size" onChange={processValue}>
                    <option value="Choose">Choose</option>
                    <option value="small">Small</option>
                    <option value="large">Large</option>
                    <option value="Heavy">Heavy</option>
                    </select></div>
                <div className="line-1"><span>Driver Name</span></div>
                <div className="input"><input type="text" name="dname" onChange={processValue}/></div>
                <div className="line-1"><span>Driver Mobile No</span></div>
                <div className="input"><input type="text" name="number" onChange={processValue}/></div>
                <div className="but" type="submit"><button>Save</button></div>
                </form>
            </div>

            <div className="box-2">
                <h1>React Assignment -2 </h1>
                <table>
                    <thead>
                        <tr>
                            <th>T-Id</th>
                            <th>T-Number</th>
                            <th>Type</th>
                            <th>Transport Root</th>
                            <th>Driver</th>
                            <th>Mobile No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vehicleList.map((vehicle,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{vehicle.tname}</td>
                                        <td>{vehicle.size}</td>
                                        <td>{vehicle.rname }</td>
                                        <td>{vehicle.dname}</td>
                                        <td>{vehicle.number}</td>
                                        <td><button onClick={delvehicle.bind(this,index)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Transport;
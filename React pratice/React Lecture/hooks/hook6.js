import { useState } from "react";

const Hooksix=()=>{
    let [username,updateuser]=useState({})
    let [Userlist,updateinfo] = useState([]);

    const processValue=(para)=>{
        updateuser(para.target.value);
    }
    const save=()=>{
        updateinfo([...Userlist,username]);
        updateuser("");
    }
    return(
        <div>
            <p><input type="text" onChange={processValue} value={username}/>
            <button onClick={save}>Save</button></p>
            {
                Userlist.map((user,index)=>{
                    return(
                        <div>
                            <p key={index}> {user} - {user.length} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hooksix;
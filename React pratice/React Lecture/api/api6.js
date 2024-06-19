
import {useState, useEffect} from 'react';

const ApiSix=()=>{

    let [UserList,UpdateUser] = useState([]);

    const getUser=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(userArray=>{
            UpdateUser(userArray);
        })
    }
    useEffect(()=>{
        getUser();
    },[])

    return(
        <div className='container'>
            <h1> Available User : {UserList.length} </h1>
            {
                UserList.map((user,index)=>{

                    return(
                        <div className='two'>
                            <h3>{user.name}</h3>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.address.street}</p>
                            <p>{user.address.suite}</p>
                            <p>{user.address.city}</p>
                            <p>{user.address.zipcode}</p>
                            <p>{user.address.geo.lat}</p>
                            <p>{user.address.geo.lng}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiSix;
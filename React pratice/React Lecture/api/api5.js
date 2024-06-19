
import { useState, useEffect } from "react";

const ApiFive=()=>{

    let [alltodos,updatetodos] = useState([]);

    const getTodos=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(todosArray=>{
            updatetodos(todosArray);
        })
    }

    useEffect(()=>{
        getTodos();
    },[])

    return(
        <div className="container">
            <h1 align="center"> Available Todos : {alltodos.length} </h1>
            {
                alltodos.map((todos,index)=>{
                   return(
                    <div className="two" key={index}>
                     
                    <p>{todos.title}</p>
                   
                </div>
                   )
                })
            }
        </div>
    )
}

export default ApiFive;
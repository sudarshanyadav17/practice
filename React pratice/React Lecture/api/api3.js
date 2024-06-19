
import {useState,useEffect} from 'react';

const ApiThree=()=>{

    let [allcomment,updatecomment]= useState([]);

    const getComment=()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response=>response.json())
    .then(commentArray=>{
        updatecomment(commentArray);
    })
    }

    useEffect(()=>{
        getComment();
    },[]);

    return(
        <div className="container">
            <h1 align="center"> Available comments : {allcomment.length} </h1>
            {
                allcomment.map((comment,index)=>{
                    return(
                        <div className='two' key={index}>
                            <h3>{comment.name}</h3>
                            <p>{comment.email}</p>.
                            <p>{comment.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiThree;
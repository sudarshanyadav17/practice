import {useState, useEffect} from 'react';

const ApiTwo=()=>{
    let [allblog,updateBlog] = useState([]);

    const getBlog=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then(blogArray=>{
            updateBlog(blogArray);
        })
    }

    useEffect(()=>{
        getBlog();
    },[])
    return(
        <div className='container'>
            <h1 align="center"> Available Blogs : {allblog.length}</h1>
            {
                allblog.map((blog, index)=>{
                    return(
                        <div className='two' key={index}>
                            <h3> { blog.title} </h3>
                            <p>  { blog.body} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiTwo;
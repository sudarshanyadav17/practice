import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ManageApi = ()=>{
    let [allblog, updateBlog] = useState( [] );
    const getBlog = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            updateBlog(blogArray);
        })
    }
    const dispatch= useDispatch()
    const save=()=>{
       let dispatchdata = { type:'saveblog', alldata:allblog};
       dispatch(dispatchdata)
       alert("Records sent to Redux")
    }
    useEffect(()=>{
        getBlog();
    },[])
    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center mb-5">
                    <h3> Manage Api : { allblog.length }</h3>
                    <button className="btn btn-danger m-3" onClick={save}> Save Blog List in Redux </button>
                </div>
                {
                    allblog.map((blog,index)=>{
                        return(
                            <div className="col-xl-4 mb-4" key={index}>
                                <p className="p-4 border rounded"> { blog.body }</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )    

}

export default ManageApi;
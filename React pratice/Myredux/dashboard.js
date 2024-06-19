import { useState } from "react";
import { useSelector } from "react-redux";


const ManageDashboard = ()=>{
    let allbook = useSelector( state=>state.Booklist );//
    const allproduct = useSelector(state=>state.Productlist);
    const allapi = useSelector(state=>state.Apilist) ;
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Redux Dashboard </h3>
                </div>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-lg-4">
                    <div className="p-4 rounded bg-info text-white">
                        <p>{allbook.length}: Available Book in Store</p>
                        
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="p-4 rounded bg-primary text-white">
                        <p>{allproduct.length}: Available Product in Store</p>
                        
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="p-4 rounded bg-primary text-white">
                        <p>{allapi.length}: Available Product in Store</p>
                        
                    </div>
                </div>
            </div>
            <div className="row mt-5">
            {
                    allapi.map((blog,index)=>{
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

export default ManageDashboard;
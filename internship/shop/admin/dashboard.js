
import { useState, useEffect } from "react";

const MyDashboard = () =>{
    let[allproduct, updateProduct] = useState([]);
    let[allorder, updateOrder] = useState([]);

    const getProduct = () =>{
        let url = "http://localhost:1234/product";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }

    const getOrder = () =>{
        let url = "http://localhost:1234/order";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateOrder(productArray);
        })
    }

    useEffect(()=>{
        getProduct();
        getOrder();
    }, []);
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h1 className="text-primary"> Seller Dashboard </h1>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-4 text-center">
                    <i className="fa fa-database fa-4x text-info"></i>
                    <h3> Item in Stock : {allproduct.length} </h3>
                </div>
                <div className="col-lg-4 text-center">
                    <i className="fa fa-headset fa-4x text-warning"></i>
                    <h3> Order Received : {allorder.length} </h3>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
}

export default MyDashboard;
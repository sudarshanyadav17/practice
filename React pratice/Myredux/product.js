
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ManageProduct = ()=>{
    let [details, processDetails] = useState( {} );
    
    const pickValue=(obj)=>{
        details[obj.target.name] = obj.target.value;
        processDetails(details);
    }
    let dispatch = useDispatch() 
    const save=(obj)=>{
        obj.preventDefault();
        let dispatchdata={type:"newproduct",pinfo:details}
        dispatch(dispatchdata)
        // console.log(details);
        processDetails({});
        obj.target.reset();

    }
    const deleteProduct=(index)=>{
        let dispatchdata={type:"removeproduct",pindex:index}
        dispatch(dispatchdata);
    }

    const allproduct = useSelector(state=>state.Productlist)

    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Manage Product : {allproduct.length}</h3>
                    
                
                        <form onSubmit={save}> 
                        <input type="text" className="m-3" placeholder="Product Name" name="pname" onChange={pickValue}/>
                        <input type="text" className="m-3" placeholder="Product Price" name="pprice" onChange={pickValue}/>
                        <input type="text" className="m-3" placeholder="Product Quantity" name="pqty" onChange={pickValue}/>
                        <button className="btn btn-primary">Save</button>
                        </form>
                
                 </div>  
            </div>
            <div className="row">
                {
                    allproduct.map((product,index)=>{
                            return(
                                <div className="col-lg-3 mb-4" key={index}>
                                    <div className="p-3 border">
                                        <h4> { product.pname }</h4>
                                        <p> Rs. {product.pprice}</p>
                                        <p> In Stock : {product.pqty}</p>
                                        <button onClick={deleteProduct.bind(this,index)} className="btn btn-danger btn-sm m-2"
                                        >Delete</button>
                                    </div>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )    

}

export default ManageProduct;
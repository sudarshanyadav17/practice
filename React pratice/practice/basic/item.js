import { useState } from "react";


const Item=()=>{
    let [itemname,updateitem]= useState({});
    let [itemlist,updatelist]= useState([]);

    const processData=(para)=>{
        itemname[para.target.name]= para.target.value;
        updateitem(itemname);

    }
    const save =(obj)=>{
        obj.preventDefault();
        obj.target.reset();
        updatelist([...itemlist,itemname]);
        updateitem({});
    }
    const delitem=(index)=>{
        itemlist.splice(index,1);
        updatelist([...itemlist]);
    }
    return(
        <div className="two">
            <form onSubmit={save}>
            <h1> React Assignment - To Collect Data Using Object </h1>
         <div className="input"><span>Item Name  : <input type="text" name="iname" onChange={processData}/></span> </div>
        <div   className="input"> <span>Item Price : <input type="text" name="price" onChange={processData}/></span></div>
        <div  className="input"><span>Item Seller : <input type="text" name="seller" onChange={processData}/></span></div>
        <div  className="input"><span>Item Mfg Date : <input type="date" name="number" onChange={processData}/></span></div>
            <button type="submit">Save</button>
            <button type="reset">Reset</button>
            </form>
            {
                itemlist.map((item,index)=>{
                    return (
                        <div className="container">
                        <div className="box-1">
                            <h2>{item.iname}</h2>
                            <p>{item.price}</p>
                            <p>{item.seller}</p>
                            <p>{item.number}</p>
                            <button onClick={delitem.bind(this,index)}>Delete</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Item;
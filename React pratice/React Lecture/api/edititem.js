
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditItem=()=>{
    let {itemid} = useParams();
    let [itemname,PickName] = useState("")
    let [price,PickPrice] = useState("")
    let [qty,PickQty] = useState("")
    let [seller,PickSeller] = useState("")
    const getItemDetails=async()=>{
        let url = "http://localhost:1234/itemlist/" + itemid;
        try{
            await fetch(url)
            .then(response=>response.json())
            .then(iteminfo=>{
                PickName(iteminfo.itemname);
                PickPrice(iteminfo.price);
                PickQty(iteminfo.qty);
                PickSeller(iteminfo.seller)
            });
        }catch(error){
            alert("Network Error Try Again !");

        }
    }
    useEffect(()=>{
        getItemDetails()
    },[])
    const save=async(obj)=>{
        obj.preventDefault()
        let iteminfo={itemname:itemname,price:price,qty:qty,seller:seller}
        let url = "http://localhost:1234/itemlist/" + itemid;
        let postData = {
            headers:{'Content-Type':'application/json'},
            method:'put',
            body:JSON.stringify( iteminfo )
        }
        try{
            await fetch(url,postData)
            .then(response=>response.json())
            .then(itemdata=>{
                alert( itemdata.itemname + "- Item Updated Successfully ")
            })
        }catch(error){
            alert("Network Error Try Later")
        }
    }
    return(
        <div className="container">
            <h1>Edit item Details - {itemid}</h1>
            <div align="center">
            <form onSubmit={save}>
                <input type='text' className="smallinput"placeholder='Enter Itemname' name='itemname' onChange={obj=>PickName(obj.target.value)} value={itemname}/>
                <input type='text' className="smallinput"placeholder='Enter Item Price' name='price' onChange={obj=>PickPrice(obj.target.value)} value={price}/>
                <input type='text' className="smallinput"placeholder='Enter Item Qty' name='qty' onChange={obj=>PickQty(obj.target.value)} value={qty}/>
                <input type='text' className="smallinput"placeholder='Enter Item Seller' name='seller' onChange={obj=>PickSeller(obj.target.value)} value={seller}/>
                <button>Update Item</button>
                </form>
            </div>
        </div>
    )
}

export default EditItem;
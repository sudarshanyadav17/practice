import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
const ManageItem=()=>{
    let [itemlist,updateItem] = useState([])
    
    let [newitem,UpdateItemList]=useState({})
    const pickItem=(obj)=>{
        newitem[obj.target.name]=obj.target.value;
        UpdateItemList(newitem);
    }
    

    const getItem=()=>{
        fetch("http://localhost:1234/itemlist")
        .then(response=>response.json())
        .then(itemArray=>{
            updateItem( itemArray.reverse() )
        })
    }
    //state Variable to handle error message
    let [ItemError,updateItemError] = useState("");
    let [PriceError,updatePriceError] = useState("");
    let [QtyError,updateQtyError] = useState("");
    let [SellerError,updateSellerError] = useState("")
    const save=(formobj)=>{
        formobj.preventDefault();
        let formstatus=true;
        //item name validation
        if(newitem.itemname===undefined ||newitem.itemname ===""){
            formstatus=false;
            updateItemError("Invalid Item Name");
        }else{
            updateItemError("")
        }
        //Item price Validation
        if(newitem.price===undefined || newitem.price==="" || isNaN(newitem.price)){
            formstatus=false;
            updatePriceError("Invaild Item Price");
        }else{
            updatePriceError("")
        }
        //Item Qty Validation
        if(newitem.qty===undefined || newitem.qty===""|| isNaN(newitem.qty)){
            formstatus=false;
            updateQtyError("Invalid Qty");
        }else{
            updateQtyError("");
        }
        //Item Seller Validation
        if(newitem.seller===undefined || newitem.seller==="" ){
            formstatus=false;
            updateSellerError("Invaild Seller")
        }else{
            updateSellerError("");
        }
        if(formstatus===true){
        let url= "http://localhost:1234/itemlist"
        let postData={
            headers:{'Content-Type':'application/json'},
            method:'post',
            body:JSON.stringify( newitem )
        }
        fetch(url,postData)
        .then(response=>response.json())
        .then(iteminfo=>{
            alert(newitem.itemname + "- item Added Successfully");
            formobj.target.reset();
            getItem();
        })
    }
    }
    const delItem=async(itemid)=>{
        let url = "http://localhost:1234/itemlist/"+ itemid;
        let postData= {method:'delete'}
        try{
            await fetch(url,postData)
            .then(response=>response.json())
            .then(itemdata=>{
                alert( itemdata.itemname + "- Item Deleted Successfully");
                getItem();
            })
        }catch(error){
            alert("Network Error Try Later");
        }
        
    }

    useEffect(()=>{
        getItem();
    },[])
    return(
        <div className='container'>
            <h1 align="center">How to Perform CRUD Operation</h1>
            <div align="center">
                <div>{ItemError}</div>
                <div>{PriceError}</div>
                <div>{QtyError}</div>
                <div>{SellerError}</div>
                <form onSubmit={save}>
                <input type='text' className="smallinput"placeholder='Enter Itemname' name='itemname' onChange={pickItem} />
                <input type='text' className="smallinput"placeholder='Enter Item Price' name='price' onChange={pickItem}/>
                <input type='text' className="smallinput"placeholder='Enter Item Qty' name='qty' onChange={pickItem}/>
                <input type='text' className="smallinput"placeholder='Enter Item Seller' name='seller' onChange={pickItem}/>
                <button>Save Item</button>
                </form>
            </div>
            <table align='center'>
                <thead>
                    <tr>
                        <th>Item Id</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Qty</th>
                        <th>Item Seller</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    itemlist.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.itemname}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td>{item.seller}</td>
                                <td>
                                    <Link to={`/edititem/${item.id}`}>
                                    <button>Edit</button>
                                    </Link>
                                    
                                    <button onClick={delItem.bind(this,item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                   }
                </tbody>

            </table>
        </div>
    )

}
 export default ManageItem;
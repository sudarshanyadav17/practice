
/* How to Collect data from multiple text-boxs */

import { useState } from "react";

const HookFive=()=>{
    let [bookinfo,updateinfo] = useState( {} ); 
    let [booklist,processList] = useState([]);
    const processValue =(param)=>{
        bookinfo[param.target.name] = param.target.value;
        // bookinfo.bname=
        updateinfo(bookinfo);
    }

    const save=(obj)=>{
        // console.log( bookinfo );
        obj.preventDefault();// it prevent from the page reloading
        obj.target.reset(); // to clear form data
        processList([...booklist, bookinfo]);
        updateinfo({});// to reset object to empty

    }
    const deleteBook=(index)=>{
        // alert(index );
        // a = a-b;
        booklist.splice(index,1); // a - b (delete a specific element from list)
        processList([...booklist]) // a = a(replace available item in state)
    }
    /* We are using the name of textbox to print the object with elements */
    return(
        <div className="container">
            <h1 align="center"> How to Handle Multiple Input Elements </h1>
            <form onSubmit={save} > 
            <p align="center">
                <input type="text" placeholder="Book Name"  className="smallinput" name="bname" onChange={processValue}/>
                <input type="text" placeholder="Book Price" className="smallinput" name="price"  onChange={processValue}/>
                <input type="text" placeholder="Book Quantity" className="smallinput" name="qty"  onChange={processValue}/>
                <input type="text" placeholder="Book Author" className="smallinput" name="author"  onChange={processValue}/>
                <button type="submit"> Save </button> 
                <button type="reset"> Reset </button>
            </p>
            </form>
            {
                booklist.map((bookdata,index)=>{
                    return(
                        <div className="three">
                            <h2> {bookdata.bname}</h2>
                            <p>Price:{bookdata.price }</p>
                            <p>Quantity:{bookdata.qty}</p>
                            <p>Author:{bookdata.author}</p>
                            <button onClick={deleteBook.bind(this, index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default HookFive;
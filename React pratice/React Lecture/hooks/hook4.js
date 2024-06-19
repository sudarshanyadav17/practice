
/* How to Collect data from multiple text-boxs */

import { useState } from "react";

const HookFour=()=>{
    let [bookinfo,updateinfo] = useState( {} ); 
    let [booklist,processList] = useState([]);
    const processValue =(param)=>{
        bookinfo[param.target.name] = param.target.value;
        // bookinfo.bname=
        updateinfo(bookinfo);
    }

    const save=()=>{
        // console.log( bookinfo );
        processList([...booklist, bookinfo]);
        updateinfo({});// to reset object to empty

    }
    /* We are using the name of textbox to print the object with elements */
    return(
        <div className="container">
            <h1 align="center"> How to Handle Multiple Input Elements </h1>
            <p align="center">
                <input type="text" placeholder="Book Name"  className="smallinput" name="bname" onChange={processValue}/>
                <input type="text" placeholder="Book Price" className="smallinput" name="price"  onChange={processValue}/>
                <input type="text" placeholder="Book Quantity" className="smallinput" name="qty"  onChange={processValue}/>
                <input type="text" placeholder="Book Author" className="smallinput" name="author"  onChange={processValue}/>
                <button onClick={save}> Save </button> 
            </p>

            {
                booklist.map((bookdata,index)=>{
                    return(
                        <div className="three">
                            <h2> {bookdata.bname}</h2>
                            <p>Price:{bookdata.price }</p>
                            <p>Quantity:{bookdata.qty}</p>
                            <p>Author:{bookdata.author}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default HookFour;
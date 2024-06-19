/* How to make a input textbox empty after collecting the data */
import { useState } from "react";

const HookThree = () =>{
    let [bookname,pickBook] = useState( "" );
    let [booklist,updateList] = useState( [] );


    const processValue = (param) =>{
        pickBook( param.target.value);
    }

    const save=()=>{
        updateList([...booklist,bookname]);
        pickBook("");// to make a text box empty 
        /* This picBook value go to bookname and makes the textbox value to empty string */
    }
    const deleteBook=(index)=>{
        booklist.splice(index,1);
        updateList([...booklist]);

    }

    return (
        <div className="container">
            <h1 align="center"> Add , List New Element in Array </h1>
            <p align="center">
                Enter Book Name : <input type="text" onChange={processValue} value={bookname}/>
                <button onClick={save}> Save </button>
            </p>
            <p align="center">
                {booklist.length}:Available Books 
            </p>
           {booklist.map((eachBook,index)=>{
                return(
                    <p className="three" key={index}>
                        {eachBook}<br/>
                        <button onClick={deleteBook.bind(this,index)}> Delete</button>
                    </p>

                )
            })}
        </div>
    )
}

export default HookThree;
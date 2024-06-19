import { useState } from "react";

const HookTwo=()=>{
    let [newBook, pickBook] = useState("");

    const processValue=(param)=>{
        pickBook(param.target.value);
    }
    return(
        <div className="container">
            <h1 align="center"> How to pick Value of TextBox ?</h1>
            <p>You have Enter : { newBook } </p>

            <p>
                Enter Book Name : <input type="text" onChange={processValue}/>
            </p>
            <p>
                Enter Book Price : <input type="number" onChange={processValue}/>
            </p>
            <p>
                Enter Book Qty : <input type="number" onChange={ xyz => pickBook(xyz.target.value) }/>
                {/* */}
            </p>
        </div>
    )
}

export default HookTwo;
//onchange is event of react related to any function
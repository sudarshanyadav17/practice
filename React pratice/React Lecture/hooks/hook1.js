//UseState Explanation 
import { useState } from "react";

const HookOne=()=>{
    let city = ['Bangalore','Pune'];

    const[x,y]= city;//x? y? - array destructure
    console.log(useState()) ; //[undefined,f]

    let [a,b] = useState(1000)// === it is state variable

//Usestate is used with two variables state variable and other is state function without state function state variable will not change 
    let [msg, updateMessage] = useState("Click on button to see result....");

    let [bookList,updateBook] = useState(['html','css','javascript'])//[undefined,f()]

    const one = ()=>{
       b( a+10 );//b=>usestate=>a
       updateMessage(" You Clicked on + button... ");
       
    }
    const save=()=>{
           updateBook( [...bookList, "TestBook 1"] ); // a = a + b ;
        //    updateBook( bookList = [...bookList,"TestBook 2"] );// a = a + b;
        //    updateBook( bookList =>[...bookList, "TestBook 3"] ); // a = a + b; 
          
    }
    return(
        <div className="container">
            <h1 align="center"> How to Use usestate() hook</h1>
            <p>{ x } , { y }, { a }</p>
            <h2>{a}</h2>
            <p>{msg}</p>
            <button onClick={one}> Click To  + By 10</button>
            <h3> All Book : {bookList.length}</h3>
            <button onClick={save}> Add Book </button>
            {
                bookList.map((bookName,index)=>{
                    return(
                        <p key={index}>{ bookName }</p>
                    )
                })
            }

        </div>
    )

}
export default HookOne;

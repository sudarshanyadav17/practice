
import Details from "./itemdetails";

const ItemList = () =>{
    return(
        <div className="container">
            <h1 align="center"> How to re-use A Component in react ?</h1>
           
            <Details iname="Mango" cost="100" seller="Amir" qty="5kg"/>
            <Details iname="Orange" cost="80" seller="Alex" qty="2kg"/>
        </div>
    );
}

export default ItemList;


// c -> b ->a ->0 (nested component)
// Details => ItemList => App
// Props to create a component which is predefind and our own requirement
//x = { iname:"Mango" cost:"100" seller:"Amir" qty:"5kg"}

//x.iname
/*
    funvtionabc(a,b){


    }
    abc(10,20)
*/
//props is a user-deifined
//props class="xyz"

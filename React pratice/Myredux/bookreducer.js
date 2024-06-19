
const Booklist=(state=[], action)=>{
    let data = Object.assign([],state);//to store data without lossing
    // alert( action.type + action.bookname );
    if(action.type==="addbook")
        data.push(action.bookname);
        
    if(action.type==="removebook")
        data.splice(action.bookindex,1 );
    return data;
}
export default Booklist;

//useselector - to bring the data to react
//usedispatch - to send the data to redux
//action=
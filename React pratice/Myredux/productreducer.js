 
const Productlist=(state,action)=>{

    let data=Object.assign([],state);

    if( action.type==="newproduct")
        data.push(action.pinfo);

    if(action.type==="removeproduct")
        data.splice(action.pindex,1);
    
    return data;
}
export default Productlist;
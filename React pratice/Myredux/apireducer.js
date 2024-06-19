const Apilist=(state,action)=>{
    let data=Object.assign([],state);
    if(action.type=== "saveblog")
        data = action.alldata
    return data;
}
export default Apilist;
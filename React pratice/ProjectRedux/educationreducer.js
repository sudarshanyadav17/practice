const Educationlist=(state,action)=>{
    let data = Object.assign([],state);

    if(action.type==="neweducation"){
        data.push(action.eduinfo);
    }
    return data
}

export default Educationlist;
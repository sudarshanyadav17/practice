
const Userlist=(userinfo)=>{

    return(
        <div className="container">
          
            <p>{userinfo.name}</p>
            <p>{userinfo.mobile}</p>
            <p>{userinfo.email}</p>
            <p>{userinfo.dept}</p>
        </div>
    )
}

export default Userlist;
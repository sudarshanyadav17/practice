
import Userlist from "./userlist";

const User=()=>{
    return(
        <div>
            <h1>How to use Props</h1>
            <Userlist name="Chinna" mobile="8919268783" email="chinnayadav951@gmail.com" dept="UI"/>
            <Userlist name="Sudarshan" mobile="564464646" email="sdakhdakh@gmail.com" dept="MCA"/>
            <Userlist name="Satish" mobile="464694643464" email="asjasdjdl@gmail.com" dept="Btech"/>
        </div>
        
    )
}

export default User;
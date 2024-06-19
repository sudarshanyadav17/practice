import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';

const ManageExperience=()=>{
    let [experienceData,updateExperience] = useState({})
    const pickData=(obj)=>{
        experienceData[obj.target.name] = obj.target.value;
        updateExperience(experienceData);

    }
    const dispatch = useDispatch()
    const save=(obj)=>{
        obj.preventDefault()
        let dispatchdata = {type:'newexperience',experienceinfo:experienceData}
        dispatch(dispatchdata);
        obj.target.reset()
    }

    const allexperience = useSelector(state => state.Experiencelist)
    return(
        <div className="container-2">
            <h1 align="center">Experience Details</h1>
            <form onSubmit={save}>
            <div className="exp">
                <div className="box-2">
                    <div className="line-2"><span>Total No of Company Worked : </span></div>
                    <div className="input-1"><input type="text" name='cnumber' onChange={pickData}/></div>
                </div>
                <div className="box-2">
                    <div className="line-2"><span>Total Projects Worked : </span></div>
                    <div className="input-1"><input type="text" name='pnumber' onChange={pickData}/></div>
                </div>
                <div className="box-2">
                    <div className="line-2"><span>Total Years of Experience : </span></div>
                    <div className="input-1"><input type="text" name='enumber' onChange={pickData}/></div>
                </div>
                <div className="box-2">
                    <div className="line-2"><span>You All Tech Skills : </span></div>
                    <div className="input-1"><textarea cols={43} rows={8} name='skill'onChange={pickData}/></div>
                </div>
                <div align="center"><button className="but">Save</button></div>
                <h3 align="center"> Available Experience : {allexperience.length}</h3>
            </div>
           
            </form>
        </div>
    )
}

export default ManageExperience;
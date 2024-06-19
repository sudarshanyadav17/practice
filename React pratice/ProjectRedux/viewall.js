// import { useState } from "react";
import { useSelector } from "react-redux";

const Manageview=()=>{
    let allbasic= useSelector(state=>state.Basiclist);
    let allcontact =useSelector(state=>state.Contactlist);
    let alledu = useSelector(state=>state.Educationlist);
    let allexperience = useSelector(state=>state.Experiencelist)
    return(
    <div>
             <h1 align="center">About My Profile</h1>
        <div className="three">
            <div className="data">
                <div className="line"><span>Basic Details</span></div>
                <div className="box-1">
                    {
                        allbasic.map((basic,index)=>{
                            return(
                                <div className="inner" key={index}>
                                    <h3>{basic.fname}</h3>
                                    <p>{basic.mobile}</p>
                                    <p>{basic.email}</p>
                                </div>
                            )
                        })
                    }
                </div>
             </div>
            <div className="data">
                <div className="line"><span>Contact Details</span></div>
                <div className="box-1">
                    {
                        allcontact.map((contact,index)=>{
                            return(
                                <div className="inner" key={index}>
                                    <p>Local Address: {contact.local}</p>
                                    <p>Permanent Address: {contact.permanent}</p>
                                    
                                </div>
                            )
                        })
                    }
                </div>
             </div>
            <div className="data">
                <div className="line"><span>Education Details</span></div>
                <div className="box-1">
                    {
                        alledu.map((edu,index)=>{
                            return(
                                <div className="inner" key={index}>
                                    <p> {edu.college}</p>
                                    <p>{edu.cgpa}</p>
                                    <p>{edu.intercollege}</p>
                                    <p>{edu.intermarks}</p>
                                </div>
                            )
                        })
                    }
                </div>
             </div>
             <div className="data">
                <div className="line"><span>Experience Details</span></div>
                <div className="box-1">
                    {
                        allexperience.map((exp,index)=>{
                            return(
                                <div className="inner" key={index}>
                                    <p> {exp.cnumber}</p>
                                    <p>{exp.pnumber}</p>
                                    <p>{exp.enumber}</p>
                                    <p>{exp.skill}</p>
                                </div>
                            )
                        })
                    }
                </div>
             </div>
        </div>

    </div>
       
    )
}

export default Manageview;
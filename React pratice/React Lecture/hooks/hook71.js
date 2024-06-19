
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Hookseven1=()=>{

    let {city,fullname,edu} = useParams();
    
    return(
        <div className="container">
            <h1 align="center"> How to Use useParams() </h1>
            <div align="center">
                <Link className="mylink" to="/hook71/Sudarshan/Bangalore/MCA">Sudarshan</Link>
                <Link className="mylink" to="/hook71/Chinna/Chennai/MBA">Chinna</Link>
                <Link className="mylink" to="/hook71/Yadav/Pune/MCA">Yadav</Link>
                <Link className="mylink" to="/hook71/Akash/Bangalore/Mtech">Akash</Link>
            </div>
            <table align="center">
                <tbody>
                    <tr>
                        <td> Your Name </td>
                        <td> {fullname}</td>
                    </tr>
                    <tr>
                        <td> Your Are From </td>
                        <td> {city}</td>
                    </tr>
                    <tr>
                        <td> Your Education </td>
                        <td> {edu}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Hookseven1;
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  let { city, fullname, edu } = useParams();
  return (
    <div className="container">
      <h1 align="center"> Using useParams() </h1>
      <div>
        <Link className="mylink" to="/detail/Sudarshan/Chennai/Btech">Sudarshan</Link>
        <Link className="mylink" to="/detail/Sandeep/Bangalore/MBA">Sandeep</Link>
        <Link className="mylink" to="/detail/Chinna/Mumbai/BCom">Chinna </Link>
        <Link className="mylink" to="/detail/Satish/Pune/Mtech"> Satish </Link>
      </div>
      <table align="center">
        <thead>
          <tr>
            <td>Your Name</td>
            <td>{fullname}</td>
          </tr>
          <tr>
            <td>Your City</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>Your Education</td>
            <td>{edu}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default Detail;

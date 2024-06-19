import { HashRouter,Routes,Route, Link } from "react-router-dom";
import Location from "./location";
import TourPlaces from "./tourplaces";
import TourPackage from "./tourpackage";
const AdminApp = ()=>{

     return(
        <HashRouter>
                <p className="container m-4 text-center">
                    <Link to="/city" className="m-4">Location </Link>
                    <Link to="/tourplace" className="m-4">Tour Places</Link>
                    <Link to="/tourpackage" className="m-4">Tour Package</Link>
                    <button onClick={logout}>Logout</button>
                </p>
                <Routes>
                    <Route exact path="/city" element={<Location/>}/>
                    <Route exact path="/tourplace" element={<TourPlaces/>}/>
                    <Route exact path="/tourpackage" element={<TourPackage/>}/>
                </Routes>
               
                
        </HashRouter>
    )
}

export default AdminApp;

const logout=()=>{
    localStorage.clear();
    window.location.href = "http://localhost:3000/";
    window.location.reload();
}
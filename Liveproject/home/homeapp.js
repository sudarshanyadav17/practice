import Login from "./login";
import Register from "./register";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
const HomeApp = () => {
  return (
    <HashRouter>
      <Routes>
         <Route exact path="/" element={<Login />}/>
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/register" element={<Register/>}/>
      </Routes>
      
     
    </HashRouter>
  );
};

export default HomeApp;



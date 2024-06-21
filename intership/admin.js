import { HashRouter,Routes,Route, Link } from "react-router-dom";
import QuestionList from './questionlist';
import AddQuestion from './addquestion';
import DataDetails from "./datareading";
const AdminApp = ()=>{

     return(
        <HashRouter>
      <ul className="bg-light">
        <li className='bg-primary rounded me-3'><Link to="/">Questions</Link></li>
        <li className='bg-primary rounded me-3'><Link to="/addquestion">Add Question</Link></li>
        <li className='bg-primary rounded me-3'><Link to="/datadetails">Data Details</Link></li>
        <button  className="btn btn-danger mb-1" onClick={logout}>Logout  <i className="fas fa-sign-out"></i></button>
      </ul>
      <Routes>
        <Route exact path='/' element={ <QuestionList/>}/>
        <Route exact path='/addquestion' element={ <AddQuestion/>}/>
        <Route exact path='/datadetails' element={ <DataDetails/>}/>
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
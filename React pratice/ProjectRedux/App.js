
import './App.css';
import { HashRouter,Routes,Route,Link } from 'react-router-dom';
import ManageBasic from './basic';
import ManageContact from './contact';
import ManageEducation from './education';
import ManageExperience from './experience';
import Manageview from './viewall';
function App() {
  return (
    <HashRouter>
      <ul>
        <li><Link to="/basic">Basic</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/viewall">Viewall</Link></li>
      </ul>
      <Routes>
        <Route exact path='/basic' element={<ManageBasic/>}/>
        <Route exact path='/contact' element={<ManageContact/>}/>
        <Route exact path='/education' element={<ManageEducation/>}/>
        <Route exact path='/experience' element={<ManageExperience/>}/>
        <Route exact path='/viewall' element={<Manageview/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

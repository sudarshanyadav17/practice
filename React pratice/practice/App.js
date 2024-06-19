import { HashRouter,Routes , Route ,Link } from 'react-router-dom';
import './App.css';
import City from './basic/city';
import Company from './basic/company';
import Customer from './basic/customer';
import Employee from './basic/employee';
import Transport from './basic/transport';
import Item from './basic/item';
import Detail from './basic/detail';
import Apione from './api/api';
import User from './basic/user';
function App() {
  return (
      <HashRouter>
        <ul>
          <li><Link to="/citylist">MyCity</Link></li>
          <li><Link to="/companylist">MyCompany</Link></li>
          <li><Link to="/customerlist">MyCustomer</Link></li>
          <li><Link to="/empolyeelist">MyEmpolyee</Link></li>
          <li><Link to="/itemlist">MyItem</Link></li>
          <li><Link to="/transport">Transport</Link></li>
          <li><Link to="/detail/Sudarshan/Bangalore/Btech">Details</Link></li>
          <li><Link to="/api1">Api</Link></li>
          <li><Link to="/user">Props</Link></li>
        </ul>
        <Routes>
            <Route exact path='/itemlist' element={<Item/>}></Route>
            <Route exact path='/citylist' element={<City/>}></Route>
            <Route exact path='/companylist' element={<Company/>}></Route>
            <Route exact path='/customerlist' element={<Customer/>}></Route>
            <Route exact path='/empolyeelist' element={<Employee/>}></Route>
            <Route exact path='/transport' element={<Transport/>}></Route>
            <Route exact path='/detail/:fullname/:city/:edu' element={<Detail/>}></Route>
            <Route exact path='/api1' element={<Apione/>}></Route>
            <Route exact path='/user' element={<User/>}></Route>
        </Routes>
      </HashRouter>
    
  );
}

export default App;

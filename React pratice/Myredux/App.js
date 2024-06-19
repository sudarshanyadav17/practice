
import './App.css';
import { HashRouter,Link, Route, Routes } from 'react-router-dom';
import ManageUser from './user';
import ManageProduct from './product';
import ManageDashboard from './dashboard';
import ManageBook from './book';
import ManageApi from './api';
function App() {
  return (
      <HashRouter>
        <div className='container mt-4' >
          <div className='row'>
          <div className='col-lg-4'>
            <h1 className='text-danger'>React and Redux</h1>
          </div>
          <div className='col-lg-8 text-end'>
            <Link className='btn btn-primary me-3' to="/">Dashboard</Link>
            <Link className='btn btn-info me-3' to="/book">Manage Books</Link>
            <Link className='btn btn-warning me-3' to="/product">Manage Product</Link>
            <Link className='btn btn-success me-3' to="/user">Manage User</Link>
            <Link className='btn btn-secondary me-3' to="/api">Manage Api</Link>
           </div>
        </div>
    </div>
       <Routes>
          <Route exact path="/user" element={<ManageUser/>}/>
          <Route exact path="/product" element={<ManageProduct/>}/>
          <Route exact path='/' element={<ManageDashboard/>}/>
          <Route exact path='/book' element={<ManageBook/>}/>
          <Route exact path="/api" element={<ManageApi/>}/>
        </Routes>
      </HashRouter>
      
  );
}

export default App;

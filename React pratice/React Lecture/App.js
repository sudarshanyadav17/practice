import { HashRouter, Routes, Route, Link } from "react-router-dom";
//This is for asynchronous communication
// import Myuser from "./basic/user";
// import Mybook from "./basic/book";
// import Myproduct from "./basic/product";
// import Mycustomer from "./basic/customer";
// import Mycompany from "./basic/company";
// import Mycity from "./basic/city";
// import Myplaces from "./basic/places";
// import Myname from "./basic/names";
// import Myperson from "./basic/person";
// import Library from "./basic/Library";
import EditEmployee from "./api/editempolyee";
import EditCustomer from "./api/editcustomer";
import MainComp from "./basic/maincomp";
import ItemList from "./basic/item";
import HookOne from "./hooks/hook1";
import HookTwo from "./hooks/hook2";
import HookThree from "./hooks/hook3";
import HookFour from "./hooks/hook4";
import HookFive from "./hooks/hook5";
import Hooksix from "./hooks/hook6";
import Hookseven from "./hooks/hook7";
import Hookseven1 from "./hooks/hook71";
import ApiOne from "./api/api1";
import ApiTwo from "./api/api2";
import ApiThree from "./api/api3";
import ApiFour from "./api/api4";
import ApiFive from "./api/api5";
import ApiSix from "./api/api6";
import ManageEmployee from "./api/employee";
import ManageItem from "./api/itemlist";
import ManageCustomer from "./api/customerlist";
import EditItem from "./api/edititem";
function App() {
  return (
    <HashRouter>
      <ul>
        {/* <li>
        
          <Link to="/userlist"> Manage User</Link>

        </li>
        <li>
          <Link to="/booklist"> Manage Book</Link>
        </li> */}
        {/* <li>
          {" "}
          <Link to="/productlist"> Manage Product</Link>
        </li> */}
        {/* <li>
          {" "}
          <Link to="/customerlist"> Manage Customer</Link>
        </li> */}
        {/* <li>
          <Link to="/citylist">Manage City</Link>
        </li> */}
        {/* <li>
          <Link to="/placeslist">Manage places</Link>
        </li> */}
        {/* <li>
          <Link to="/namelist">Manage names</Link>
        </li> */}
        {/* <li>
          <Link to="/personlist">Manage person</Link>
      
        <li>
        </li> */}
        {/* <li>
          <Link to="/library">Manage library</Link>
        </li> */}
        <li>
          <Link to="/itemlist">Props</Link>
        </li>
        <li>
          <Link to="/hook1">Hook1</Link>
        </li>
        <li>
          <Link to="/hook2">Hook2</Link>
        </li>
        <li>
          <Link to="/hook3">Hook3</Link>
        </li>
        <li>
          <Link to="/hook4">Hook4</Link>
        </li>
        <li>
          <Link to="/hook5">Hook5</Link>
        </li>
        <li>
          <Link to="/hook6">Hook6</Link>
        </li>
        <li>
          <Link to="/hook7">Hook7</Link>
        </li>
        <li>
          <Link to="/hook71/Sudarshan/Bangalore/MCA">Hook7.1</Link>
        </li>
        <li>
          <Link to="/api1">Api 1</Link>
        </li>
        <li>
          <Link to="/api2">Blogs</Link>
        </li>
        <li>
          <Link to="/comment">Comments</Link>
        </li>
        <li>
          <Link to="/album">Albums</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        <li>
          <Link to="/emplist">Employee</Link>
        </li>
        <li>
        </li>
          <Link to="/cuslist">Customer</Link>
        </li>
        <li>
          <Link to="/itemlist">Item</Link>
        </li>
      </ul>

      <Routes>
      <Route exact path="/editemp/:empid" element={<EditEmployee/>} />
      <Route exact path="/editcustomer/:customerid" element={<EditCustomer/>}/>
      <Route exact path="/edititem/:itemid" element={<EditItem/>}/>
      <Route exact path="/itemlist" element={<ManageItem/>}/>
      <Route exact path="/hook1" element={<HookOne />} />
      <Route exact path="/hook2" element={<HookTwo />} />
      <Route exact path="/hook3" element={<HookThree/>}/>
      <Route exact path="/hook4" element={<HookFour/>}/>
      <Route exact path="/hook5" element={<HookFive/>}/>
      <Route exact path="/api1" element={<ApiOne/>} />
      <Route exact path="/comment" element={<ApiThree/>} />
      <Route exact path="/album" element={<ApiFour/>} />
      <Route exact path="/todos" element={<ApiFive/>} />
      <Route exact path="/user" element={<ApiSix/>} />
      <Route exact path="/itemlist" element={<ItemList />} />
      <Route exact path="/emplist" element={<ManageEmployee/>} />
      <Route exact path="/cuslist" element={<ManageCustomer/>} />
        {/* <Route exact path="/userlist" element={<Myuser />} /> */}
        {/* <Route exact path="/booklist" element={<Mybook />} /> */}
        {/* <Route exact path="/productlist" element={<Myproduct />} /> */}
        {/* <Route exact path="/customerlist" element={<Mycustomer />} /> */}
        {/* <Route exact path="/companylist" element={<Mycompany />} /> */}
        {/* <Route exact path="/citylist" element={<Mycity />} /> */}
        {/* <Route exact path="/personlist" element={<Myperson />} /> */}
        {/* <Route exact path="/namelist" element={<Myname />} /> */}
        {/* <Route exact path="/placeslist" element={<Myplaces />} /> */}
        <Route exact path="/library" element={<MainComp />} />
        <Route exact path="/hook6" element={<Hooksix/>} />
        <Route exact path="/hook7" element={<Hookseven/>} />
        <Route exact path="/hook71/:fullname/:city/:edu" element={<Hookseven1/>} />
        {/* :variable */}
        {/*  useParams - it used to capture the value from url  */}
        <Route exact path="/api2" element={<ApiTwo/>} />
      </Routes>
    </HashRouter>
  );
  
}
export default App;

/* 
  How to call a function in javascript()
  => Myuser();
  how to call a component in JSX
  => <Myuser/>

*/

// import logo from './logo.svg';
import './App.css';
import AdminApp from './admin/adminapp';
import AgentApp from './agent/agentapp';
import UserApp from './user/userapp';
import HomeApp from './home/homeapp';
function App() {

  // localStorage.setItem("type","");// to store the data in localstorage

  if(localStorage.getItem("type")==="ADMIN")
    {
      return(<AdminApp/>);
  }
  else if( localStorage.getItem("type")==="AGENT" )
    {
      return(<AgentApp/>);
    }
  else if( localStorage.getItem("type")==="USER" )
      {
        return(<UserApp/>);
      }
  else{
    return(<HomeApp/>)
  }
}

export default App;

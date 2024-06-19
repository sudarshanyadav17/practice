
function Myuser() {
  let alluser = ["Alex", "Manish", "Madhu", "Chinna", "Sudarshan"];
  return (
    <div className="container">
      <h1>Manage User : {alluser.length}</h1>
      <p> {alluser[0]}</p>

      {alluser.map((value, index) => {
        return <p key ={index} className="three"> {value} </p>;
      })}

    </div>
  );
}

export default Myuser;

//default keyword is compulsory
//component name must start with captial letter
//{   } => Javascript in React

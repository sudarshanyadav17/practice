import { useState , useEffect } from "react";
// Here useEffect is same as onload in javascript.
const ApiOne = () => {
  let [allcity, updateCity] = useState([]);
  
  const getCity = () => {
    fetch("city.json")
      .then((xyz) => xyz.json())
      .then((cityArray) => {
        // alert( cityArray.length );
        updateCity(cityArray);
      });
  };
  let [allbook,updateBook] = useState([]);
  const getBook=()=>{
    fetch("book.json")
    .then((xyz)=>xyz.json())
    .then(bookArray=>{
        updateBook(bookArray)
    })
  }
    useEffect(()=>{
        getBook();
    },[])// call only 1 time
  return (
    <div className="container">
      <h1> How Api Work ?</h1>
      <button onClick={getCity}> Print City </button>
     
        <div>
      {allcity.map((cityname, index) => {
        return (
          <p className="three" key={index}>
            {cityname}
          </p>
        );
      })}
      </div>
      
      <h2> Available Book : {  allbook.length }</h2>
      {
        allbook.map((bookname,index2)=>{
            return(
                <p key={index2} className="three"> {bookname} </p>
            )
        })
      }
    </div>
  );
};

export default ApiOne;

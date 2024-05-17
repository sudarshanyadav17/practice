let city = ['Bangalore','Hyderabad','Goa','Mysore','Vizag','Kolkata'];

const printCity= (mycity="") =>{
        console.log(mycity);
        console.log("------------");
            city.map((cityname, index)=>{
    // if(mycity !="Kolkata" && mycity !="Bangalore")
    if(cityname != mycity)
    console.log(index, cityname);
})
    console.log("---The End--- \n");
}

printCity('Kolkata');
printCity('Bangalore');
printCity();




let city = ['Bangalore','Hyderabad','Goa','Mysore','Vizag'];

let i=0;
while( i<city.length )
{
    console.log(i , city[i]);
    i++;
}

console.log("Using For Each \n ");

city.forEach((cityName, index)=>{ 
    
    console.log( index, cityName );
})

//forEach is an listing function.

console.log("\n");

console.log("Using filter \n ");
city.filter((cityName, index)=>{ 
    
    console.log( index, cityName );
})

console.log("\n");

console.log("Using map \n ");
city.map((cityName, index)=>{ 
    
    console.log( index, cityName );
})

console.log("\n");

console.log("Map Without Index \n ");
city.map(cityName=>{
    console.log( cityName );
})

console.log("\n");

console.log("Map Inline \n ");
city.map(cityName=>console.log( cityName ));

console.log("\n");

console.log("Using map \n ");
city.map(function(cityName, index){ 
    
    console.log( index, cityName );
})


    // how to create array in javascript.
    
    let city = ['Bangalore','Hyderabad','Goa','Mysore','Vizag'];


    let user= new Array('Ram','Sudarshan','Chinna');

    console.log(city.length);
    console.log(user.length);

    /*
        Structure of array

        arrayName[index]=Element

        Example

        city[0]=>Bangalore
        city[1]=>Hyderabad
        city[2]=> Goa  
        city[3]=>Mysore 
        city[4]=>Vizag
    */

        console.log( city[4] );
        console.log( city[ city.length -1]  ); // get the last value dynamically

        console.log("All Value of City Array");
        for(let i=0; i<city.length;i++){
            console.log( city[i] );
        }

        








//Nested Array//

let customer = [
    {
        city:"Bangalore",
        user:['leo','chinna','satish']
    },
    {
        city:"Mangalore",
        user:['rohit','virat','dhoni']
    },
    {
        city:"Vizag",
        user:['shikar','rayadu','suresh']
    }
];

customer.forEach((info,index)=>{
    console.log(info.city);

    info.user.map((fullname, index2)=>{
        console.log("\t", index2 , fullname);
    })
})
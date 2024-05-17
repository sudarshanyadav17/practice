
console.log("object in javascript \n");
//collection of property
let user = {
    fullname:"Alex",
    mobile:8919268783,
    city:"Bangalore",
    edu:"MCA"
}

console.log(user.fullname);
console.log(user.mobile);
console.log(user.city);
console.log(user.edu);

console.log("Array of object \n");

let userlist = [
    { fullname:"Alex", mobile:8919268783, city:"Bangalore", edu:"MCA"},
    { fullname:"Chinna", mobile:8919268783,  city:"Bangalore", edu:"MTech"},
    { fullname:"Sudarshan", mobile:8919268783,  city:"Bangalore", edu:"MBA"},
    { fullname:"sandeep" , mobile:8919268783, city:"Bangalore", edu:"MA"},
    { fullname:"satish", mobile:8919268783, city:"Bangalore", edu:"BA"}
];

console.log(userlist.length);
// console.log(userlist[1]);

userlist.map((oneuser,index)=>{
    console.log( oneuser.fullname , oneuser.mobile , oneuser.city , oneuser.edu );
    console.log("----------------------");
})
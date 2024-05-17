
let input ="25565313";

/*
 
isNaN() - IS NOT A NUMBER
 => It return true for string
 =>It return flase for number
 

*/

let datastatus=isNaN(input);

if(datastatus==true){
    console.log(input,"-is string value ");
} else{
    console.log(input,"-is number value ");
    if(input %2==0)
    {
        console.log(input,"-is even value");
    }
    else{
        console.log(input,"-is odd value");
    }
}
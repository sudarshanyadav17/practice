
let pageurl = "login";

switch(pageurl)
{
    case "home":
        console.log("Display Home.html");
        break;
    case "about":
        console.log("Display About.html");
        break;
    case "login":
        console.log("Display Login.html");
        break;
    case "register":
    case "signup":
        console.log("Display Register.html");
        break;
    
     default:
        console.log("Display Contact.html");
    
}
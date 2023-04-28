//Soda = parameter
//Cup = function
function sodaOrder(soda) {
    console.log("I would like a " + soda);
}
sodaOrder("Cola");
sodaOrder();

function setSodaOrder(soda) {
    //defining a variable within a function gives everyone cola
    soda = "Cola"
    console.log("Enjoy your " + soda);
}
setSodaOrder();
// //So it will never print out anything else,making customers upset and your function basically useless.
setSodaOrder("Root Beer");

//Mutiple parameters?
function flavoredSodaOrder(flavor, soda) {
    console.log("I would like a "+ flavor + " flavored " + soda);
}
flavoredSodaOrder("Vanilla", "Orange Soda");


//Return Video 
//Soda = parameter
//Cup = function
function sodaOrder2(soda) {
    return("I would like a " + soda);
}
console.log("Return " + sodaOrder2("Cola"));

function setSodaOrder2(soda) {
    //defining a variable within a function gives everyone cola
    soda = "Cola"
    return("Enjoy your " + soda);
}
//So it will never print out anything else,making customers upset and your function basically useless.
console.log("Return " + setSodaOrder2("Root Beer"));

//polite customer 
function niceCustomer() {
    return " please and thank you";
}

//using return~
function flavoredSodaOrder2(flavor, soda) {
   return  sodaOrder2(soda) + ", " + flavor + " flavored"  + niceCustomer();
}
console.log("Return " + flavoredSodaOrder2("Vanilla", "Orange Soda"));


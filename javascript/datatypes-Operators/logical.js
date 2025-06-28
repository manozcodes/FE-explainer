
// AND &&
// OR ||
// NOT !


const isLoggedin = false;


const isAdmin = false;


const isStaff = false;


if(isLoggedin && isAdmin){
    console.log("i am admin, show me attendance sheet !!!");
} else {
    console.log("i am NOT admin, show me login page !!!");
}

if(isLoggedin && isStaff){
    console.log("i am staff, show me attendance sheet !!!");
} else {
    console.log("i am NOT staff, show me login page !!!");
}



const iHaveMoney = false;
const iHaveTicket = false;
const iAmBlind = true;

if(iHaveMoney || iHaveTicket){
    console.log("i can go to the movie");
} 
else if(iAmBlind){
    console.log("i CANNOT WATCH THE MOVE....");
}
else {
    console.log("i cannot go to the movie");
}


const isAsian = true;

if(isAsian != true){
    console.log("i am from CHINA");
} else {
    console.log("i am from ANTARTICA")
}

// const driss = "married";

// if(driss !== "married"){
//     console.log("driss cannot marry again");
// } else {
//     console.log("driss can marry for the first time");
// }


// You have 3 employees, manager, staff, and cleaner
// Each has certain salary of 1000, you want to raise 45% to manager and staff BUT 50% for cleaner
// Write a JS code usining AND, OR, ! to demonstrate this (3 examples)




// const fruits = ["apple", "banana", "orange", "grapes"];

// // for (let i=0;i<4;i++){
// //     console.log(fruits[i]);
// // }
    
// // for of
// for(let i of fruits) {
//     console.log(i)
// }


// for in

const fruits = {name: "apple", color: "red", price: 100};

// only properties will be returned
for(let i in fruits){
    console.log(i, fruits[i]);
}

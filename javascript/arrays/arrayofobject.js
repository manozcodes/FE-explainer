const arrayofobject = [
    {
        name: "manoz",
        country: "nepal"
    },
    {
        name: "manish",
        country: "nepal",
    },
    {
        name: "driss",
        country: "italy",
    },
    {
        name: "valentina",
        country: "earth",
    },
    {
        name: "mich",
        country: "jupiter",
    }
]


// const myIndex = arrayofobject.findIndex((elem) => elem.name === 'manish');
// arrayofobject.push({
//     name: 'mahesh',
//     country: 'nepal'
// })
// console.log(arrayofobject)

//SPREAD OPERATOR (...)

// const finalArray = [{name: 'mahesh', country: 'nepal'}, ...arrayofobject]
// console.log(finalArray)


// HIGHER ORDER FUNCTIONS


// const myIndex = arrayofobject.findIndex((elem) => elem.name === 'manish'); // it returns index
// const myIndex2 = arrayofobject.find((elem) => elem.name === 'manish'); // it returns item
const myIndex3 = arrayofobject.filter((elem) => elem.category === 'music'); // it returns array


console.log(myIndex3)

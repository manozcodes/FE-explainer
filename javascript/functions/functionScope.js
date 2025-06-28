const country = 'USA';

function findSum1(){
    const country1 = 'New York';
    console.log(`checking scope:::::: ${country} is global`)
    console.log(`checking scope:::::: ${country1} is local`)
    //block of code
}

// console.log(`MAIN GLOBAL ${country}`)

findSum1();
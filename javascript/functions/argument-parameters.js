// reserved keywords :: arguments, function, return, undefined, null

function findSum(){
    //this will return object. i.e {}
    console.log(arguments)
}

findSum(10,20);

// manoz, idris are the parameters
function findSum1(manoz, idris){
    console.log('my params / parameters are', manoz, idris)

    const total = manoz + idris;
    console.log(total);
}

function findSum3(manoz, idris){
     return manoz + idris || 100;
     // 0+0 = 0, return 0 OR 100
// return undefined || 100

}

function concatString(){
    console.log(arguments, arguments[0], arguments[1])
    // return arguments[0] + arguments[1] || 'hakuna mattata';
    // return arguments[0] + arguments[1]?.length || 'hakuna mattata';
    return (arguments[0] + arguments[1]).length > 0 ? arguments[0] + arguments[1] : 'hakuna mattata';


}

findSum1(10,20);
findSum1(100,200);
console.log(findSum3(0,0))
console.log(concatString("manoz", "idris"))


// #Assesment::

// write a function that accepts any number of arguments/parameters and returns the sum of all the arguments

// write a function that 1 parameter 'radius' and retun area of circle (2pi r square)







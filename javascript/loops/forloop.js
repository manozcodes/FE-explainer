const rows = 5;

for(let i=1; i<=rows; i++){
    let num = "";
    for(let j=1; j<=i; j++) {
        num += j + " ";
    }
    console.log(num);
}
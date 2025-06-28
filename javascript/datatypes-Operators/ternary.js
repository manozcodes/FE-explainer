// <CONDITION> ? <TRUE> : <FALSE>

// ? [after TRUE statement] : [after FALSE statement]


const hasMoney = true;
const hasTicket = false;

const canGoToMove =  !hasMoney ? hasTicket ? 'i have a ticket and i can go for a movie' : 'i dont have a ticket but i can go for a movie' : 'i cannot';

console.log(canGoToMove);




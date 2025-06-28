// step-1 class keyword
class Player {
// setep -2 constructor
    constructor(name, country, jeryNumber) {
        this.name = name;
        this.country = country;
        this.jeryNumber = jeryNumber;
    }
    // step 3 - define a method
    goal() {
        console.log(`${this.name} scored a goal!`)
    }
    freeKick() {
        console.log(`${this.name} took a free kick!`)
    }
}


// setp 4 - create an object
const cristiano = new Player("Cristiano", "Portugal", 7);
cristiano.goal()



const messi = new Player("Messi", "Argentina", 10);
messi.freeKick()
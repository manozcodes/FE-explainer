class MyFather {
    constructor(age, wealth) {
        this.age = age;
        this.wealth = wealth;
    }

    transferWealth() {
        console.log(`The money ${this.wealth} has been successfully transfered!`)
    }

    notTransferWealth() {
        console.log(`The money ${this.wealth} can't be transfered!`)
    }
}

class IamChildren extends MyFather{
    constructor(age, wealth, name, myage, myschool) {
        super(age, wealth);
        this.name = name;
    }

    iDeserveWealth() {
        if(this.name === 'manoz'){
        console.log(`The money ${this.wealth}: YOU DESERVED!`)
        } else {
            console.log(`YOU DONT !!!`)
        }
    }
}

const obj1 = new IamChildren(20, '50 M', 'Manoz');
obj1.iDeserveWealth();
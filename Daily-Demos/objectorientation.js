const person = {
    firstName: 'Brando',
    lastName: 'Cluff',
    age: '27'
}
// console.log(person.firstName)
// console.log(person['lastName'])

const meal = {
    appetizer: 'mozzerrella sticks',
    entree: 'Prime Rib, French Dip sandwhich',
    dessert: 'Oreo Pizookie',
    drink: 'pint of red ale'
}
// Making a new variable called dessert, whose value 
//  comes from the dessert property on the meal object
const {dessert} = meal
// const dessert = meal.dessert

// console.log(dessert)

const {appetizer, drink} = meal

// console.log(dessert, appetizer, dessert)

//aliasing/destructuring
const{drink: myDrink} = meal

const{entree: yumYum, dessert: gooshyGoosh,} = meal 

// console.log(myDrink, yumYum, gooshyGoosh)

for (const key in person){
    // console.log(person[key])
    // console.log(key, person, person[key])
}

person.job = 'Coding'
person['pet'] = 'Snake'


delete person.pet

// console.log(person)

        /*
        let this = {} <<<< (Empty object)        
        */
class Dog {
    constructor(dogName, dogBreed, dogAge){
       console.log('Dog Class', dogName, dogBreed, dogAge)
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;
        
        this.toys = []
    }
    greeting(){
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}!`)
    }
    addToy(toy){
        this.toys.push(toy)
    }
}
const lassie = new Dog('Lassie', 'Collie', 10)
lassie.addToy('rubber bone')
// console.log(lassie)

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, pupTrainLvl){
        console.log('Puppy Class', dogName, dogBreed, dogAge, pupTrainLvl)
        super(dogName, dogBreed, dogAge)
        this.trainLvl = pupTrainLvl
    }

    levelUp(num){
        this.trainLvl += num 
    }
    greeting(){
        super.greeting()
        console.log('I am a puppy')
    }
}
const leo = new Puppy('Leo', 'Labradoodle', 1, 0)

// console.log(leo)
// leo.greeting()
console.log(Puppy.key)
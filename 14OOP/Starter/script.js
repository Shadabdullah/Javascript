'use strict';
//OOPS

const Person  = function(firstName ,birthYear){
this.firstName = firstName
this.birthYear = birthYear
// never create function inside of a constructor

}

new Person("Shad",1999)
// 1 New {} is created 
//2 functin is called , this {}
// 3 {} linked to prototype
//4 function automatically return {}

const shad = new Person("shad" ,1999)
const umran  = new Person ("umran",1998)

console.log(umran instanceof Person)


//  Protypes

Person.prototype.calAge = function(){
    console.log(2023-this.birthYear)
}

shad.calAge()

// But how and why does this actually work?

// Well, it works because any object always

// has access to the methods and properties

// from its prototype.

// And the prototype of Jonas and Matilda

// is person dot prototype. 
console.log(shad.__proto__) 
console.log(shad.__proto__ === Person.prototype) //True
console.log(Person.prototype.isPrototypeOf(Person))//false
console.log(Person.prototype.isPrototypeOf(shad))//True


Person.prototype.species = "Homo Sapiens"
console.log(shad.species ,umran.species)

console.log(shad.hasOwnProperty("firstName"))//True
console.log(shad.hasOwnProperty("species"))//False its property of prototype of shad

//object.log(prototype chain)
console.log(shad.__proto__)
console.log(shad.__proto__.__proto__)
console.log(shad.__proto__.__proto__.__proto__)

console.log(Person.prototype.__proto__)

console.dir(Person.prototype.constructor)

const arr = [3,4,5,5,6,9]

Array.prototype.unique = function(){

    return [...new Set(this)]
}

console.log(arr.unique())


// Challenge

const Car =  function(make ,speed){

    this.speed = speed
    this.make  = make

}

Car.prototype.speedy = function(){

    return this.speed + 'km/hr'
}

Car.prototype.accelerate =  function(){

    this.speed+=10
    console.log(this.speed)
}
Car.prototype.break = function(){

    this.speed -= 5
    console.log(this.speed)
}

const bmw = new Car("BMW" ,50)

console.log(bmw.speedy())
bmw.accelerate()
bmw.break()

// Classes
class Persons{

constructor(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
}
calAge(){

    console.lot(this.age-2023)
}


}

const shad1 = new Person ("shad",24)

shad1.calAge()

// setter getter  we call it assecer properties

const account = {

    owner : "shad",
    movements : [201,12,1,21,300] ,
    // want to access properties after some calculation
    get latest (){
        return this.movements[this.movements.length-1]
    }
,
    set latest(mov){

        this.movements.push(mov)
    }

}

console.log(account.latest)

account.latest = 50 ;
console.log(account.movements)
// Static method
// Object.Create()
const PersonProto = {

    calAge(){

        console.log(this.age-2024)
    }
}

const shad3 = Object.create(PersonProto)
// adding property to the object
shad3.age = 24


shad3.calAge()

// Inheritence ES6

class Persons1{

    constructor(fullName, birthYear){
        this.fullName = fullName
        this.birthYear = birthYear
    }
    calAge(){
    
        console.log(this.age-2023)
    }
    greet(){

        console.log(`Hey ${this.fullName}`)
    }
    
    get age(){

        return 2024 - this.birthYear
    }
    
    }
    
    class Student extends Persons1{
    constructor(fullName,birthYear,course){
    // always happen to first
    super(fullName,birthYear)
    this.course = course

  
    }
    
    introduce(){

        console.log(`My name is ${this.fullName}`)
    }


    }

    const martha = new Student("martha",2021,'computer science')

    martha.introduce()
    martha.calAge()
    martha.greet()

// overwrite method if the child have same mthod as parent then first it will look for own method

// one more example
class Accounts{
    //  1 public field (instances)
    _movements = []
    local = navigator.language

    // 2 private fields truly private
   #movements
   #pin

    //
    constructor(owner ,currency,pin){

        this.owner = owner
        this.currency = currency
        // protected
        this.#pin = pin 
        // properties not based on input
        // protected
        // this._movements = []
        // this.local = navigator.language

        console.log(`Thanks for account ${this.owner}`)

    }
// Public interface of object
  deposit(val){
    this.#movements.push(val)
    return this ;
  }
  withDraw(val){

    this.deposit(-val)
    return this
  }
 getMovements(){

    return this.#movements
 }
 // no browser supports
 #getLoan(){

    return False
 }
}

const acc1 = new Accounts("shad","RS",121)
console.log(acc1)

//LECTURE encapsulation 

// add _ underscore


//Truly Private

// public fields 
//  private field 
//public method 
//private method

// Chaining method

acc1.deposit(100).withDraw(10000).deposit(1000)


console.log(acc1.getMovements())

// Nice lectures for today

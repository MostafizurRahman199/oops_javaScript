class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
  }
}

class Student extends Person{
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age , subject) {
    super(name, age);
    this.subject = subject;
  }
}

let stu1 = new Student("Ali", 22, 89);
let stu2 = new Student("Shifat", 33, 90);

console.log(stu1);
console.log(stu2);

stu1.talk();
stu2.talk();


class Mammal{
   constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("Eating");
    }
}


class Dogs extends Mammal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("Barking");
    }
}

class Cat extends Mammal{
    constructor(name){
         super(name);
    }

    meow(){
        console.log("Meowing");
    }
}


let dog1 = new Dogs("Hasina");
let dog2 = new Dogs("Kader");

let cat1 = new Cat("Rafsan");
let cat2 = new Cat("Shakib");
let cat3 = new Cat("Marshafi");


console.log(dog1);
dog1.bark();
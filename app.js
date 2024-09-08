let arr = [1, 2, 3];

arr.sayHello = () => {
  console.log("Hello I am here");
};

function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hello my name is ${this.name} and I am ${this.age} years`);
    },
  };

  return person;
}

//Constructor -  doesn't return anything, and start with capital letter.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
};

let p1 = new Person("shifat", 25);
let p2 = new Person("Mukti", 22);

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  talk() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years
                old and I am in ${this.grade} grade.`);
  }
}

let student1 = new Student("Mostafiz", 25, 3.79);
let student2 = new Student("Ali", 26, 3.82);

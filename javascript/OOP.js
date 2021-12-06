// Inheritance
    // Parents to child , code reusability, , mutataion 

    // The JavaScript inheritance is a mechanism that allows us 
    // to create new classes on the basis of already existing classes. 
    // It provides flexibility to the child class to reuse the methods and variables of a parent class.
    // The JavaScript extends keyword is used to create a child class on the basis of a parent class.

// Encapsulation
    // private, public, protected
    // privacy, data security

    //Encapsulation includes the idea that the data of an object should not be directly exposed. 
    //Instead, callers that want to achieve a given result are coaxed into 
    //proper usage by invoking methods (rather than accessing the data directly)

// Polymorphism
    // with many form 
    // we can define polymorphism as the ability of a message to be displayed in more than one form. 
    // Real life example of polymorphism: A person at the same time can have different characteristic . 
    // Like a man at the same time is a father, a husband, an employee. 
    // So the same person posses different behavior in different situations.
    // Polymorphism takes advantage of inheritance in order to make this happen.

// Abstraction
    // Data abstract 
    // An abstraction is a way of hiding the implementation details and showing only the functionality to the users. 
    // In other words, it ignores the irrelevant details and shows only the required one.

// Javascript classes
// There are two types of oop. class based, and prototype based. Javascript uses prototype based.
// A JavaScript class is not an object.
// It is a template for JavaScript objects.

//class User {
      // scope
      // data , function->methods
      //name; //this is not same as in constructor. It is in scope of class, one below is in scope of constructor
      //address;

      //this
      //The constructor method is called automatically when a new object is created.

      // constructor(name) {
      //     this.name = name;
      //}
      
      // we can write function inside class without function keyword
      //getName() {
        //return this.name;
      //}

//}

// creating object using class is done by calling constructure
// const obj = new User("Ashim Sharma");
//console.log(obj);

//console.log("Object>>>", obj.getName());

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     carType() {
//         return ("It is " + this.name + " from " + this.year);
//     }
//   }

//   let car1 = new Car("Ford", 1990);
//   console.log(car1);
//   console.log(car1.carType());

// Another way of doing  samething by making functional constructor

// function Employee(name, address, position) {
//     this.name = name;
//     this.address = address;
//     this.position = position;
// }

// let emp = new Employee("Ashim", "ktm", "CEO");
// we can not add a new property to a constructor function.
// Employee.email = "test1223.net"; // can not do this
// we have to do like this
// Employee.prototype.email = "test@343.net";
// console.log(emp.email);

//emp.email = "Test@123.com";

//console.log("Employee Detail>>>>", emp);

// function Employee(){

//     this.name = "Employee Name";
//     this.address = "Kathmandu";
//     this.position = "CEO";
// }

// const emp = new Employee();     // obj

// Employee.prototype.email = "testemail@gmail.com";


// Employee.prototype.getName = function() {
//     return this.email;
// }

// console.log(emp.getName());


let Product = function(title, price, discount){
    this.title = title;
    this.price = price;
    this.discount = discount;

}

let pro_1 = new Product("fisrt prod", 10000, 10);

// console.log(pro_1);

// function get discount value
Product.prototype.getDiscountValue = function () {
    let afterDiscount = pro_1.price - ((pro_1.price * pro_1.discount)  /100);
    return afterDiscount;
}


//console.log(pro_1.getDiscountValue());

// Javascript class extends/super and mutation

class Car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}

class Model extends Car {
    constructor(name, brand, model) {
    
        super(name, brand); 

        this.model = model;
    }
    myCar() {
        return "I have a " + this.name + ", and it is a " + this.brand + "," + this.model+".";
    }
}

let car1 = new Model("Car", "Toyota", "Camry");
//console.log(car1);
//console.log(car1.myCar());

// The extends keyword is used to create a child class of another class (parent).
// The child class inherits all the methods from another class.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
// Note: From the example above; The super() method refers to the parent class. 
// By calling the super() method in the constructor method, 
// we call the parent's constructor method and gets access to the parent's properties and methods.
// extends is an ES6 feature (JavaScript 2015). It is supported in all modern browsers:

// class Person {
//    setName(name) {
//        this.name = name;
//    }
// }

// class NewUser extends Person {
//     getName() {
//         return this.name;
//     }
// }

// const person1 = new NewUser();
// person1.setName("Ashim Sharma");
//console.log(person1.getName());

// Mutation example
let obj = {
    name: "default",
    email: "",
    address: ""
};
console.log("Object >> ", obj);

let obj_1 = {
    ...obj,
    phone: ""
};
console.log(obj_1);












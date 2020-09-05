class Person {
    constructor(name, age, city) {
        console.log("In constructor");
        this.name = "Shantanu";
        this.age = 25;
        this.city = "Mumbai";
        console.log(`name : ${this.name}   age: ${this.age}  city : ${this.city}`);
    }

    getPersonName(name) {
        console.log("In function name");
        return name;
    }
    getPersonAge(age) {
        console.log("In function age");
        return age;
    }
    getPersonCity(city) {
        console.log("In function city");
        return city;
    }



}

let ref = new Person;
let ref2 = new Person;

console.log(ref.getPersonName("Vipul"));
console.log(ref.getPersonAge(25));
console.log(ref.getPersonCity("Pune"));

console.log(ref2.getPersonName("aditya"));
console.log(ref2.getPersonAge(25));
console.log(ref2.getPersonCity("asd"));

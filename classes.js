import { Animal, Cat } from "./animal.js";

let cat = new Animal('Cat', 4);

// getting values
console.log(cat);
console.log(cat.type);
console.log(cat.legs);

// chaning values 
cat.legs = 3;
console.log(cat.legs);

// static function
console.log(Animal.return10());

// get
console.log(cat.metaData);

// Instance of Cat class
let cat2 = new Cat('Cat', 3, true);

console.log(cat2);
console.log(cat2.makeSound());
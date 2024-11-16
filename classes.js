import { Animal } from "./animal.js";

let cat = new Animal('Cat', 4);

// getting values
console.log(cat);
console.log(cat.type);
console.log(cat.legs);

// chaning values 
cat.legs = 3;
console.log(cat.legs);
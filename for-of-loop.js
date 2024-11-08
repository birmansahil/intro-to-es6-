let incomes = [80000, 40000, 70000, 65000, 100000];
let total = 0;

// old way 
for (let i = 0; i < incomes.length; i++) {
    total += incomes[i];
}

console.log(total);

// new way
let newTotal = 0;

for (let income of incomes) {
    console.log(income);
    newTotal += income;
}
console.log(newTotal);

// You are not limited to arrays you can iterate over other objects as well

let fullName = "Sahil Birman";

for (let char of fullName) {
    console.log(char);
}
let contacts = ["Chris", "Alex", "Lida"];

// this is creating a reference to the contacts array and not copying the array
let friends = contacts;
console.log(friends);

// any changes made to the contacts array will be reflected in the friends array
contacts.push("Jeny");
console.log(friends);

// and any changes made to the friends array will be reflected in the contacts array
friends.push("Hamna");
console.log(contacts);

// we can make a new copy using the spread operator 
let favorites = [ "David", ...contacts];
contacts.push("Kyle");
console.log(favorites);
console.log(contacts);

// we can also use the spread operator on the object
let person = {
    name: "Sahil",
    age: 25,
    city: "North York"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Frontend dev"
}

console.log(employee);
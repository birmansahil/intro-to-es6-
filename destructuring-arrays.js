let names = ['Sahil', 'Chris', 'Jenny', 'John'];

// old way
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// new way
// let [name1, name2, name3, name4] = ['Sahil', 'Chris', 'Jenny', 'John'];
let [name1, name2, name3, name4] = names;
console.log(name1);

name1 = 'Mark';
console.log(name1);
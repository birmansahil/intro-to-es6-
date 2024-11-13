// function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

// anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

// arrow function 
const dinnerMenu = (meal) => {
    return `I'm going to eat a ${meal} for dinner`;
}

// One liner
// arrow function 
const dinnerMenu2 = (meal) => `I'm going to eat a ${meal} for dinner`;

console.log(dinnerMenu("burger"));
console.log(dinnerMenu("chicken salad"));
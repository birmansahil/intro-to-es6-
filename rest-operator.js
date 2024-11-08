// rest operator is useful when you are unsure of how many arguments will be passed to a functions
function add(...nums) {
    console.log(nums);
}

add(4);
add(1,2 ,3, 4, 5);
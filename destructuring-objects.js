const player = {
    name: 'Mark',
    club: 'Chelsea',
    address: {
        city : 'London'
    }
};

console.log(player.name);
console.log(player.address.city);

// Destructuring
const {name, club, address: {city}} = player;
console.log(`${name} plays for ${club} and resides in ${city}`);
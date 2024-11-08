function addressMaker(city, state) {
    const newAddress = {
        newCity: city,
        newState: state
    };
    console.log(newAddress);
}

addressMaker("North York", "Ontario");

// if the key is same as the parameter, you do not have to write it twice

function newAddressMaker(city, state) {
    const newAddress = { city, state };
    console.log(newAddress);
}

newAddressMaker("London", "Ontario");

function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    
}

addressMaker({city: 'Austin', state: 'Texas'});

// re-writing the function
function newAddressMaker(address) {
    const {city, state} = address;
    const newAddress = { city, state, country: "United States" };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

newAddressMaker({city: 'Austin', state: 'Texas'});
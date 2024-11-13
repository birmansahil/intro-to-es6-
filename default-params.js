const singer = (artist) => {
    console.log(`${artist} is a great singer`);
}

singer("Arjan");

// default parameter
const singer2 = (artist = "someone") => {
    console.log(`${artist} is a great singer`);
}

singer2();
singer2("Rafi");
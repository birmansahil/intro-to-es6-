export class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    get metaData() {
        return `${this.name} was born in ${this.country}`;
    }   
}

export class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }

    // override
    get metaData() {
        return `${this.name} is ${this.age} years old and knows how to play Tennis`;
    }
}
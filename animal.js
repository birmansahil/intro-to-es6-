export class Animal {
    constructor (type, legs) {
        this.type = type;
        this.legs = legs;
    }   

    makeSound(sound = "Loud Noise") {
        console.log(sound);
    }

    static return10() {
        return 10;
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    } 
}

// Inheritance 
export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }

    // overriding methods
    makeSound(sound = "Meow") {
        console.log(sound);
    }
}
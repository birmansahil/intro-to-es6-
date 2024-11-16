export class Animal {
    constructor (type, legs) {
        this.type = type;
        this.legs = legs;
    }   

    makeSound(sound = "Loud Noise") {
        console.log(sound);
    }
}
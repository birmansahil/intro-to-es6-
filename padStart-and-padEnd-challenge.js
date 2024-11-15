let example = 'YouTube.com/CodingTutorials360';

// This will add empty spaces in front of the string because no character is specified
console.log(example.padStart(100).length);

// This will not do anything as the string itself is more than one character long
console.log(example.padEnd(1));
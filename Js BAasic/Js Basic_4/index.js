console.log('Helloooooo');

// Functions Create
function run() {
    console.log('Running');
}
// Function Called
run();

// Named Function Assignment
let stand = function walk() {
    console.log('walking');
};
stand();

let jump = stand;
jump();


// Anoymos Funtion Assignment
let stand2 = function () {
    console.log('jumpingg');
};
stand2();


// Funtion
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 2));


// Rest Operator
function sum(value, ...args) {
    console.log(args);
}
sum(1, 2, 3, 4, 5, 6);

// Default Parameters
function interest(p, r = 6, y = 9) {
    return p * r * y / 100;
}
console.log(interest(1000, undefined, 8));


// Get and Set

let person = {
    fName: 'Aritra',
    LName: 'Bera',

    get name() {
        return `${person.fName} ${person.LName}`
    },

    set name(value) {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.LName = parts[1];
    }

};

console.log(person.name);


// Scope

for (var i = 1; i <= 10; i++) {
    
}
console.log(i);

'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

//Strict mode reserves certain words
const interface = 'Audio';



function logger() {
    console.log('My name is Allan');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
let x, y;
x = y = 25-10-5;
console.log(x, y);
console.log(x, y); 



//Function Declarations
function calcAge1(birthYear) {
    return 2037 -  birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function Expression
const calcAge2 = function(birthYear) {
    return 2037 -  birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



const calcAge2 = function(birthYear) {
    return 2037 -  birthYear;
}

//Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Allan'));
console.log(yearsUntilRetirement(1980, 'Bob'));



//Nested Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));


//ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2] = 'Jay';
console.log(friends[2]);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

//Exercise
const calcAge = function(birthYear) {
    return 2037 -  birthYear;
}
const years4 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years4[0]);
const age2 = calcAge(years4[1]);
const age3 = calcAge(years4.length - 1);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);



//add elements
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); //last
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Steve'));

if (friends.includes('Peter')) {
    console.log('You have a friend named Peter');
}


//OBJECTS
const allan = {
    firstName: 'Allan',
    lastName: 'Acree',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(allan);
console.log(allan.lastName);
console.log(allan['lastName']);

const nameKey = 'Name';
console.log(allan['first' + nameKey]);

const interestedIn = prompt('What do you want to know about Allan? Choose between firstName, lastName, age, job, and friends');

if (allan[interestedIn]) {
    console.log(allan[interestedIn]);
} else {
    console.log('Wrong request!');
}

allan.location = 'Ohio';
allan['twitter'] = '@allanacree';
console.log(allan);

console.log(allan.firstName + ' has ' + allan.friends.length + ' friends, and his best friend is ' + allan.friends[0]);

console.log(`${allan.firstName} has ${allan.friends.length} friends, and his best friend is ${allan.friends[0]}`);


const allan = {
    firstName: 'Allan',
    lastName: 'Acree',
    birthYear: 1999,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function() {
        return 2021 - this.birthYear;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

//console.log(allan.calcAge());
// console.log(allan['calcAge'](1991));
console.log(allan.getSummary());


//LOOPS
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting rep number ${rep}`);
// }

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);

console.log('---ONLY STRINGS---');
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
console.log('---BREAK WITH NUMBER---');
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


//LOOP BACKWARDS
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}
*/


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop about to end.');
}

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(2, 3);



const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }


}
console.log(yearsUntilRetirement(1991, 'Allan'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

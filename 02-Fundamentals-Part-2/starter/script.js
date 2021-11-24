/*const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageSarah, ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2 ** 3 means 2 to the power of 3 which would be 8

const firstName = "Allan";
const lastName = "Acree";

console.log(firstName + " " + lastName);
//Assignment operators
let x = 10 + 5;
x += 10;
console.log(x); //this will equal 25

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

console.log(25-10-5);

let x, y;
x = y = 25-10-5;
console.log(x, y);




//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;    //this concats to 11
n = n - 1;          //This substracts 1
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN, false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//converts 0 of variable money because its being used for an if statement
const money = 0;
if(money) {
    console.log("Don't spend it all!)");
} else {
    console.log('You should get a job!');
}

//hieght is defined as 0 but get height is undefined since 0 is a falsy value
let height = 0;
if(height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = 18;
if(age === 18) console.log('You became an adult');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

const day = 'Monday';
 
switch (day) {
    case 'Monday': //day === 'Monday'
        console.log('Plan course structure');
        break;
    case 'Tuesday':
        console.log('Prepare theory vidoes');
        break;
    case 'Wednesday':
        console.log('Prepare theory vidoes');
        break;
    case 'Thursday':
        console.log('exercise');
        break;
    case 'Friday':

        break;
    case 'Saturday':
        console.log('For the boys');
        break;
    case 'Sunday':
        console.log('Lords day');
        break; 
    default:
        console.log('Not a valid day');
}


const age = 23;
age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink water');

//TConditional Ternary Operator
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//Much longer without the ternary operator
let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/


/*
//data set 1
let markMass = 78;
let markheight = 1.69;
let markBMI = markMass / markheight ** 2;

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight **2;

console.log(markBMI, johnBMI);
let markHigherBMI = false;
if (markBMI > johnBMI) {
    markHigherBMI = true;
}
console.log(markHigherBMI);

// data set 2
markMass = 95;
markheight = 1.88;
markBMI = markMass / markheight ** 2;

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight **2;

console.log(markBMI, johnBMI);
markHigherBMI = false;
if (markBMI > johnBMI) {
    markHigherBMI = true;
}
console.log(markHigherBMI);
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if(BMIMark >= BMIJohn) {
    console.log(`Mark's BMI ${BMIMark}, is higher than John's ${BMIJohn}`);
} else {
    console.log(`John's BMI ${BMIJohn}, is higher than Mark's ${BMIMark}`);
}

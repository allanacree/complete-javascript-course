/*// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//Find temp amplitude. Sometimes there are sensor errors
// - How to computer max and min temperatures?
// - What is a sensor error" what to do?

//Break into sub-problems
// - How to ingore errors
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log("Amplitude: " + amplitude);*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//Coding Challenge #2 Arrays
/*const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bills = [125, 555, 44];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));
  

  const calcTip = function(bill) {
      return bill >= 50 && bill <= 300 ? bill *0.15 : bill * 0.2;
  }

  const bills = [125, 555, 44];
  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

  const totals = [bills[0] + tips[0]];
  console.log(bills, tips, totals);
  

  //CHALLENGE #3
  const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
  };

  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
  };

  var checkBMI = true;
  if (john.calcBMI() > mark.calcBMI()) {
      checkBMI = true;
  } else {
      checkBMI = false;
  }

  console.log(mark.bmi);
  console.log(john.bmi);

  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${checkBMI ? 'higher' : 'lower'} than ${mark.fullName}'s BMI (${mark.calcBMI()})`)
*/


//CODING CHALLENGE #4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));
  

  const calcTip = function(bill) {
      return bill >= 50 && bill <= 300 ? bill *0.15 : bill * 0.2;
  }

  const bills = [125, 555, 44];
  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

  const totals = [bills[0] + tips[0]];
  console.log(bills, tips, totals);
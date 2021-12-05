// dolphinOne = 44, dolphinTwo = 23, dolphinThree = 71;
// koalasOne = 65, koalasTwo = 54, koalasThree = 49;

dolphinOne = 85, dolphinTwo = 54, dolphinThree = 41;
koalasOne = 23, koalasTwo = 34, koalasThree = 27;

calcAverage = (a, b, c) => ((a + b + c) / 3);

avgDolphins = calcAverage(dolphinOne, dolphinTwo, dolphinThree);
avgKoalas = calcAverage(koalasOne, koalasTwo, koalasThree);

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins > (avgKoalas * 2)) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if(avgKoalas > (avgDolphins * 2)) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`There are no winners`)
    }
}
checkWinner(avgDolphins, avgKoalas);





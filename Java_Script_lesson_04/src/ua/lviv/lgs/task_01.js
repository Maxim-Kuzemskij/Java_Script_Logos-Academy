/* Функції */
function numberArrConsole(NumberArr) {
	console.log(NumberArr);
}

// від меншого до більшого
function sortNumberArrByPlus(a, b) {
	return a - b;
}

// від більшого до меншого
function sortNumberArrByMinus(number1, number2) {
	return (-1) * (number1 - number2);
}


/* Основні дії з масивами і змінними*/
let NumberArr = [
	4, 1, 4.002, 5, 7, 3, 6, 4.001, 67, 98.6,
	64, 0, -2, -13, 57, 63, 17, 63.8, -13, 11003,
	1, 0, 134, -13, -367, -6322, 9655, 583, -34.98655, -11
];
numberArrConsole(NumberArr);



NumberArr.sort(sortNumberArrByPlus);
numberArrConsole(NumberArr);

NumberArr.sort(sortNumberArrByMinus);
numberArrConsole(NumberArr);






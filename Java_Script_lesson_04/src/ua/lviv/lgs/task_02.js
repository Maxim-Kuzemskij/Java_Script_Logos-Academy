/* Функції */
function numberArrayConsole(NumberArray) {
	console.log(NumberArray);
}

function sortNumberArrByPlus(a, b) {
	return a - b;
}

function sortNumberArrByMinus(number1, number2) {
	return (-1) * (number1 - number2);
}


/* Основні дії з масивами і змінними*/
let NumberArray = [
	4, 1, 4.002, 5, 7, 3, 6, 4.001, 67, 98.6,
	64, 98, -2, -13, 57, 63, 17, 63.8, -13, 11003,
	1111, 0, 134, -13, -367, -6322, 9655, 583, -34.98655, -11
];

console.log('---------------------------------------------------');

numberArrayConsole(NumberArray);
console.log('---------------------------------------------------');


let negativeNumber = NumberArray.filter(function(number) {
  return number < 0;
});

negativeNumber.sort(sortNumberArrByMinus);
numberArrayConsole(negativeNumber);
console.log('---------------------------------------------------');


let positiveNumbers =NumberArray.filter(function(number1) {
	return number1 >= 0;
});

positiveNumbers.sort(sortNumberArrByPlus);
numberArrayConsole(positiveNumbers);
console.log('---------------------------------------------------');







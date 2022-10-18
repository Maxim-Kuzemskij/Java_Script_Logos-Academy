function sumEmemployeeSalaries(EmemployeeSalaries) {

	var sum = 0;
	for (var salary of Object.values(EmemployeeSalaries)) {
		sum += salary;
	}

	return sum;
}

var EmemployeeSalaries = {
	"John": 10000,
	"Pete": 15694,
	"Mary": 12033
};


if (sumEmemployeeSalaries(EmemployeeSalaries) == 0) {
	console.log(0);
} else {
	console.log('Ememployee Salaries = ' + sumEmemployeeSalaries(EmemployeeSalaries));
}
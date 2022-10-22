function alert(array) {
	console.log(array);
	console.log('-----------------------------------');
}



let StudentsOfSchool = [];

let Student1 = { yearOfStuding: 2, facultyName: 'Географічний факультет' };
let Student2 = { yearOfStuding: 3, facultyName: 'Філологічний факультет' };
let Student3 = { yearOfStuding: 8, facultyName: 'Факультет історії' };
let Student4 = { yearOfStuding: 7.6, facultyName: 'Економічний факультет' };
let Student5 = { yearOfStuding: 3, facultyName: 'Географічний факультет' };
let Student6 = { yearOfStuding: 5, facultyName: 'Факультет історії' };
let Student7 = { yearOfStuding: 12, facultyName: 'Філологічний факультет' };
let Student8 = { yearOfStuding: 2, facultyName: 'Економічний факультет' };
let Student9 = { yearOfStuding: 1, facultyName: 'Економічний факультет' };
let Student10 = { yearOfStuding: 0.5, facultyName: 'Географічний факультет' };

StudentsOfSchool.push(Student1, Student2, Student3, Student4, Student5, Student6, Student7, Student8, Student9, Student10)
alert(StudentsOfSchool);


					//а
function getFacultyName(obj) {
	return obj.facultyName;
}

let facultyNames = StudentsOfSchool.map(getFacultyName);
alert(facultyNames);




					//б
function sumYearOfStuding(sumOfYears, currentObj) {
	return sumOfYears + currentObj.yearOfStuding;
}

let YearSum = StudentsOfSchool.reduce(sumYearOfStuding, 0);
alert(YearSum);



function show(array) {
	console.log(array);
}

function devide() {
	console.log('---------------------------------');
}



let styles = [
	'Блюз',
	'Джаз'
];


show(styles);
styles.push('Рок-н-Ролл');
show(styles);
devide()


var stylesLength = styles.length - 1;
styles[stylesLength - 1] = 'Класика';
show(styles);
devide()


delete styles[0];
console.log(styles[0]);
devide();



styles.unshift('Реп', 'Реггі');
show(styles);










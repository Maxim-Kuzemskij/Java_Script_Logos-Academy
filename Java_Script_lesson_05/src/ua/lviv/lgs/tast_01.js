function makeBuffer() {
	var text = '';

	return function(piece) {
		if (arguments.length == 0) {
			return text;
		}
		text += piece;
	};
};

var buffer = makeBuffer();

buffer('Я');
buffer(' Люблю');
buffer(' Програмування!');
console.log(buffer());

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log(buffer2());
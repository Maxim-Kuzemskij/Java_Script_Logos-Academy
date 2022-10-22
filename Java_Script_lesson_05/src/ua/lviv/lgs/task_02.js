function makeBuffer() {
	var text = '';

	function buffer(piece) {
		if (arguments.length == 0) {
			return text;
		}
		text += piece;
	};

	buffer.clear = function() {
		text = "";
	}

	return buffer;
};

var buffer = makeBuffer();

buffer("Я");
buffer(" Люблю Програмування!");
console.log("Ваш буфер: " + buffer());

buffer.clear();

console.log("Буфер пустий!!" + buffer());
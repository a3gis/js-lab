function God() {
}

God.prototype = {
	answer: 42
}

function Cat() {
}

Cat.prototype = {
	__proto__: God.prototype,
	meouw: function () {
		return "meouw!"
	}
}

var c = new Cat()
console.log(c.answer, c.meouw())

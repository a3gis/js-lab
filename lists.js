var exports = module.exports

function head(xs) {
	return xs[0]
}
exports.head = head

function tail(xs) {
	return xs.slice(1)
}
exports.tail = tail

function last(xs) {
	return xs[xs.length-1]
}
exports.last = last

function init(xs) {
	return xs.slice(0, xs.length-1)
}
exports.init = init

function map(f, xs) {
	if (xs.length < 1) {
		return []
	}
	return [f(head(xs))].concat(map(f, tail(xs)))
}
exports.map = map

function foldl(f, i, xs) {
	if (xs.length < 1) {
		return i
	}
	if (xs.length == 1) {
		return f(i, head(xs))
	}
	return foldl(f, f(i, head(xs)), tail(xs))
}
exports.foldl = foldl

function foldl1(f, xs) {
	return foldl(f, head(xs), tail(xs))
}
exports.foldl1 = foldl1

function foldr(f, i, xs) {
	if (xs.length < 1) {
		return i
	}
	if (xs.length == 1) {
		return f(head(xs), i)
	}
	return f(head(xs), foldr(f, i, tail(xs)))
}
exports.foldr = foldr

function foldr1(f, xs) {
	return foldr(f, last(xs), init(xs))
}
exports.foldr1 = foldr1

function scanl(f, i, xs) {
	return foldl(function (acc, x) {
		return acc.concat([f(last(acc), x)])
	}, [i], xs)
}
exports.scanl = scanl

function scanr(f, i, xs) {
	return foldr(function (x, acc) {
		return [f(head(acc), x)].concat(acc)
	}, [i], xs)
}
exports.scanr = scanr

function swap(xs, i, j) {
	var t = xs[i]
	xs[i] = xs[j]
	xs[j] = t
}

function selectionsort(xs) {
	for (var i = 0, l = xs.length; i < l; i++) {
		var k = i
		for (var j = i + 1; j < l; j++) {
			if (xs[j] < xs[k]) {
				k = j;
			}
		}
		swap(xs, i, k)
	}
	return xs
}

module.exports = selectionsort

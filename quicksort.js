function random_pivot(xs) {
	var i = Math.floor(Math.random() * xs.length)
	return [
		xs[i],
		xs.slice(0, i).concat(xs.slice(i + 1))
	]
}

function quicksort(xs) {
	if (xs.length <= 1) {
		return xs
	}
	var	t		= random_pivot(xs),
		pivot 	= t[0],
		lt    	= t[1].filter(function (x) { return x < pivot }),
		gt	  	= t[1].filter(function (x) { return x >= pivot })
	return quicksort(lt).concat([pivot]).concat(quicksort(gt))
}

module.exports = quicksort

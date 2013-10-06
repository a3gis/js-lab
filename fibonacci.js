var memoized = {}

function fibonacci(n) {
	if (n < 2) {
		return n
	}
	return memoized[n] || (memoized[n] = fibonacci(n - 2) + fibonacci(n - 1))
}

module.exports = fibonacci

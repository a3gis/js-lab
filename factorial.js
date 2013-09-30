var bignum = require('bignum')

var memoized = {}

function factorial(n) {
	if (n == 0) {
		return bignum(1)
	}
	return memoized[n] || (memoized[n] = factorial(n - 1).mul(n))
}

module.exports = factorial

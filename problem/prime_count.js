function isPrimitive(n) {
	let result = true
	if (n <= 1) {
		result = false
	} else {
		for (let i = 2; i * i <= n; i += 1) {
			if (n % i === 0) {
				result = false
				break
			}
		}
	}
	return result
}
var countPrimes = function(n) {
	let result = 0
	for (let index = 0; index < n; index++) {
		if (isPrimitive(index)) result += 1
	}
	return result
}

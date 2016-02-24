// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort(// Sort the numbers in descending order (10, 9, 8, 7, etc).
	function(first,second){
		return first-second;
}
).filter(
	function(greaterThan) { // Remove any integers greater than 19.
		if (greaterThan < 19) {
			return greaterThan;
		}
	}
).map (function(timesMinus){ // Multiply each remaining number by 1.5 and then substract 1.
	return timesMinus*1.5 -1;
}
).reduce(
function(prev,curr) { // Then output (either in the DOM or the console) the sum of all the resulting numbers.
 return prev + curr;
})
);
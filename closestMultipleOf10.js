 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	//your code is here
 	var mod = num % 10 ;
 	if (num % 10 >= 5) {
 		return num + (10 - mod);
 	}
 	else {
 		return num - mod ;
 	}
 }
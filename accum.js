// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
        //your code is here
        var result = ""
        for(var i = 0 ; i < input.length ; i++){
        	for(var j = 0 ; j <= i ; j++){
        		if (j === 0){
        			result += input[i].toUpperCase();
        		}
        		else {
        			result += input[i].toLowerCase();
        		}
        	}
        	if (i === input.length - 1){
        		return result;
        	}
        	result += "-"
        }
        return result ;
    }
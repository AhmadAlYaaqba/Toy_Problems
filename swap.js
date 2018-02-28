	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		//your code is here
		var result = ""
		each(input,function(elem,i){
			if (elem.toLowerCase() === elem){
				result+= elem.toUpperCase();
			}
			else {
				result+= elem.toLowerCase();
			}
		})
		return result;
	}

	//helper Function
	function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}
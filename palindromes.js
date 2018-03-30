function CheckPalindrome(String) {
	var i,j;
	let LowerCaseString = String.toLowerCase();
	console.log(LowerCaseString);
	for(i = 0,j = 0; i < LowerCaseString.length/2 ;  i++,j++){
		if( GetLowerCaseStringFor_First(i) !== GetLowerCaseStringFor_Second(String.length-j-1)){
			return false;
		}
		return true;
	}
	function GetLowerCaseStringFor_First() {
		console.log(LowerCaseString[i]);
	while (LowerCaseString[i] === " " ||  LowerCaseString[i] === ","){
		i++;
	}

	return LowerCaseString[i];
	}
	function GetLowerCaseStringFor_Second() {
		console.log(String.length-j-1);
		console.log(LowerCaseString[String.length-j-1]);
	while (LowerCaseString[String.length-j-1] === " " ||  LowerCaseString[String.length-j-1] === ","){
		j++;
	}
	
	return LowerCaseString[String.length-j-1];
	}
}
console.log(CheckPalindrome("A car, a man, a maraca"));
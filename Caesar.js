function Caesar(string,Number) {
	console.log(string.toLowerCase());
	for(let i=0 ; i < string.length ; i++){
		if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=122){
			if(!(string.charCodeAt(i) > 90 && string.charCodeAt(i) <97)){
	  string = string.slice( 0, i) + GetTheRequiredCharactor(i,Number,string) + string.slice( i+1, string.length);}}
	}
	return string;
}
function GetTheRequiredCharactor(i,Number,string) {
	//For UpperCase Letters
	 if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
	 		if(Number >= 0){
	 			if(Number + string.charCodeAt(i) > 90){
	 				let New_Code = (Number + string.charCodeAt(i) - 90)%27 + 64;
	 					return String.fromCharCode(New_Code);
	 			}
	 			else{
	 				return String.fromCharCode(Number + string.charCodeAt(i));
	 			}
	 		}
	 		else{
	 			if(Number + string.charCodeAt(i) < 65){
	 				let New_Code = 91 - (65 - (Number + string.charCodeAt(i)))%27;
	 					return String.fromCharCode(New_Code);
	 			}
	 			else{
	 				return String.fromCharCode(Number + string.charCodeAt(i));
	 			}
	 		}
	 }
	 else{//For LowerCase letters
	 		if(Number >= 0){
	 			if(Number + string.charCodeAt(i) > 122){
	 				let New_Code = (Number + string.charCodeAt(i) - 122 )%27 + 96;
	 					return String.fromCharCode(New_Code);
	 			}
	 			else{
	 				return String.fromCharCode(Number + string.charCodeAt(i));
	 			}
	 		}
	 		else{
	 			if(Number + string.charCodeAt(i) < 97){
	 				let New_Code = 123 - (122 - Number + string.charCodeAt(i))%27;
	 					return String.fromCharCode(New_Code);
	 			}
	 			else{
	 				return String.fromCharCode(Number + string.charCodeAt(i));
	 			}
	 		}
	 }
}
string = Caesar("Helro, World!",5);
console.log(string);
// String.fromCharCode(22);
// string.charCodeAt(i);
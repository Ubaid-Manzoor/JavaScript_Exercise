function IsUpperCase(Character) {
	if(Character >= "A" && Character <="Z"){
		return true;
	}
	return false;
}
console.log(IsUpperCase("a"));
function Snake_Case(String) {
	var i = 0;
	console.log(String[i]);
	while(i < String.length){
		if(String[i] === "," || String[i] === " ")
		{
			if(String[i-1] != "_"){
				String = String.slice(0, i) + "_" + String.slice(i+1 , String.length);
				i--;
			} 
			else {
				String = String.slice(0, i) +  String.slice(i+1 , String.length);
				i--;
			}
		}
		i++;
	}
	i=0;
	while(i < String.length){	
		if(IsUpperCase(String[i]))
		{
			if(String[i-1] != "_"){
				String = String.slice(0, i) + "_" + String.slice(i , String.length);
			} 
			else {
				String = String.slice(0, i) +  String.slice(i , String.length);
			}
		}
		i++;
	}
	return String;
}
let Snake_Case_String  =  Snake_Case("heeAAA,,,,  heHe,  e ,hello");
console.log(Snake_Case_String);
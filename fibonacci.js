function nth_element_of_fibinacci(number) {
	let i=2;
	if(number === 1 || number === 2){
		return 1;
	}
	let Previous = 1;
	let NextNumber = 1;
	while(i != number){
		let Dublicate_of_NextNumber = NextNumber;
		NextNumber = Previous + NextNumber;
		Previous = Dublicate_of_NextNumber;
		i++;
	}
	return NextNumber;
}
let Number = nth_element_of_fibinacci(4);
console.log(Number);
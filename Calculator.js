let Calculator = {};
Calculator.Sum = function(a,b){
	return a+b;
};

Calculator.Sub = function(a,b) {
	return a - b;
};

Calculator.Mul = function(a,b) {
	return a*b;
};

Calculator.Div = function(a,b) {
	return a/b;
};

Calculator.Fac = function(a) {
	if(a === 1){
		return 1;
	}
	return a * Calculator.Fac(a-1);
};
let Sum_of_Numbers = Calculator.Sum(2,3);
console.log(Sum_of_Numbers);
let Factorial_of_a_Number = Calculator.Fac(5);
console.log(Factorial_of_a_Number);
let Sub_of_Numbers = Calculator.Sub(2,3);
console.log(Sub_of_Numbers);
let Mul_of_a_Numbers = Calculator.Fac(5,3);
console.log(Mul_of_a_Numbers);
let Div_of_Numbers = Calculator.Div(2,3);
console.log(Div_of_Numbers);



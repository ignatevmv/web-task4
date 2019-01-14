subtask2();

function subtask2(){

	const eps = 0.006;

	var x = parseFloat(prompt('Введите x:', 0.25), NaN);

	while(isNaN(x)){
		alert('Введенный x не является числом!');
		x = parseFloat(prompt('Введите x:', 0.25), NaN);
	}

	var sign = 1;
	var k = 0;
	var a = 1;
	var sum = 0;

	var out = 'S = ';

	var a;
	do{
		a = get_addend(sign, x, k);
		out += '{a} + '.replace('{a}', a);
		sum += a;
		sign *= -1;
		k++;
	}while(Math.abs(a) > eps);

	out = out.substr(0, out.length - 3);
	out += ' = {s}'.replace('{s}', sum);
	console.log(out);
	console.log('Task 4.2:');
	console.log(sum);

	function get_addend(p, q, t){
		return p * Math.pow(3, t) * Math.pow(q, t);
	}

}
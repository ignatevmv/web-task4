subtask4();

function subtask4(){

	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function getArray(n){
		var a = [];
		for(var i = 0; i < n; i++){
			a[i] = getRandomInt(-100, 100);
		}
		return a;
	}

	function getResultArray(a){
		for(var i = 1; i < a.length; i++){
			var k = a[i];
			var j = i - 1;
			while(j > 0 && a[j] > k){
				a[j + 1] = a[j];
				j--;
			}
			a[j + 1] = k;
		}
		return a;
	}

	console.log('Task 4.4');
	var a = getArray(10);
	console.log(a);
	console.log(getResultArray(a));

	var n = parseInt(prompt('Введите число n:', 10), NaN);

	while(isNaN(n)){
		alert('Введенное n не является числом!');
		n = parseInt(prompt('Введите число n:', 10), NaN);
	}

	var matrix = document.getElementsByClassName('matrix')[1];
	b = new Array();
	var t = 1;
	for(var i = n - 1; i >= 0; i--){
		b[i] = new Array();
		var row = matrix.insertRow(n - i - 1);
		for(var j = n - 1; j >= 0; j--){
			if((n - i) % 2 == 0) b[i][n - j - 1] = t;
			else b[i][j] = t;
			t++;
			row.insertCell(n - j - 1);
		}
	}

	for(var i = 0; i < n; i++){
		var row = matrix.rows[i];
		for(var j = 0; j < n; j++){
			matrix.rows[i].cells[j].innerText = b[i][j];
		}
	}

}
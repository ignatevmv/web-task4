subtask1();

function subtask1(){
	document.getElementsByClassName('submit')[0].addEventListener('click', function(){
		var a = parseInt(document.getElementById("a").value, NaN);
		var b = parseInt(document.getElementById("b").value, NaN);
		var h = parseInt(document.getElementById("h").value, NaN);
		if(isNaN(a)){
			alert('Параметр a не явялется числом!');
			return;
		}
		if(isNaN(b)){
			alert('Параметр b не явялется числом!');
			return;
		}
		if(isNaN(h)){
			alert('Параметр h не явялется числом!');
			return;
		}

		var s = ((a + b) * h) / 2;
		console.log('Площадь трапеции: ' + s);
		
	});
}
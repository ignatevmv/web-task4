subtask3();

function subtask3(){

	const n = 7;
	const m = 9;
	const min_rand = -100;
	const max_rand = 100;

	var matrix = document.getElementsByClassName('matrix')[0];

	for(var i = 0; i < n; i++){
		var row = matrix.insertRow(i);
		for(var j = 0; j < m; j++){
			var cell = row.insertCell(j);
			var rand = Math.floor(Math.random() * (max_rand - min_rand + 1)) + min_rand;
			cell.innerHTML = '<input type="text" value="{rand}" x="{x}" y="{y}">'
								.replace("{rand}", rand)
								.replace('{x}', i)
								.replace('{y}', j);
		}
	}



	document.getElementsByClassName('submit')[1].addEventListener('click', function(){
		var max_cell = matrix.rows[0].cells[0].firstChild;
		for(var i = 0; i < n; i++){
			var row = matrix.rows[i];
			for(var j = 0; j < m; j++){
				var cell = row.cells[j].firstChild;
				if(Math.abs(cell.value) > Math.abs(max_cell.value)){
					max_cell = cell;
				}
			}
		}	

		console.log('Task 4.3');
		console.log('Максимальный элемент по абсолютной величине: {max_value} ({x}, {y})'
						.replace('{max_value}', max_cell.value)
						.replace('{x}', max_cell.getAttribute('x'))
						.replace('{y}', max_cell.getAttribute('y')));
	});

}
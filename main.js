
class MultiplyMatrix {
	/**
	 Matrix multiplication processing class	 
	 **/
	constructor(A,B){
		this.A = A
		this.B = B
		this.rowsA = A.length
		this.rowsB = B.length
		this.colsA = A[0].length
		this.colsB = B[0].length
		this.C = []
	}
	
	multiply(){
		// console.log(A)
		for (var i = 0; i < this.rowsA; i++) this.C[ i ] = [];
		for (var k = 0; k < this.colsB; k++){
			for (var i = 0; i < this.rowsA; i++){
				var t = 0;
				for (var j = 0; j < this.rowsB; j++) t += this.A[ i ][j]*this.B[j][k];
					this.C[ i ][k] = t;
				}
			 }
		return this.C
	}
	
}

// Read data from input field 
function table_to_array(table_id) {
	let myData = document.getElementById(table_id).rows;
	let my_liste = [];
	for (var i = 0; i < myData.length; i++) {
			let el = myData[i].children;
			let my_el = [];
			for (var j = 0; j < el.length; j++) {
				if (table_id =='matA'){
					tmp = document.getElementById("a"+i+""+j).value;
				} else if (table_id =='matB'){
					tmp = document.getElementById("b"+i+""+j).value;
				}
				// my_el.push(el[j].innerText);
				my_el.push(Number(tmp));

			}
			my_liste.push(my_el);

	}
	return my_liste
}

class Generate {
	/*
	creating tables with matrices, processing them	 
	*/
	
	// input matrix
	input_matrix () {
		let setter = function (){
			let size = document.getElementById('size').value;
			if (size==1){ return 2}
			else if (size==2){ return 3;}
			else if (size==3){ return 4;}
			else if (size==4){ return 5;}
			
		}
		var res_table1 = document.createElement("table");
		var res_table2 = document.createElement("table");
		res_table1.id = 'matA';
		res_table2.id = 'matB';

		for (let i = 0; i < setter(); i++) {
			var row = document.createElement("tr");
			for (let j = 0; j < setter(); j++) {
				var column = document.createElement("td");
				var input_teg = document.createElement("input");
				input_teg.type = "text"; input_teg.id = "a"+i+""+j; input_teg.value = "0";
				column.appendChild(input_teg);
				row.appendChild(column);
			}
			res_table1.appendChild(row);
		}

		for (let i = 0; i < setter(); i++) {
			var row = document.createElement("tr");
			for (let j = 0; j < setter(); j++) {
				var column = document.createElement("td");
				var input_teg = document.createElement("input");
				input_teg.type = "text"; input_teg.id = "b"+i+""+j; input_teg.value = "0";
				column.appendChild(input_teg);
				row.appendChild(column);
			}
			res_table2.appendChild(row);
		}
		if (document.getElementById("matA")==null){
			var titl1 = document.createElement("h2"); var titl2 = document.createElement("h2");
			titl1.appendChild(document.createTextNode("Matrix A"));
			document.body.appendChild(titl1);
			document.body.appendChild(res_table1);
			titl2.appendChild(document.createTextNode("Matrix B"));
			document.body.appendChild(titl2);
			document.body.appendChild(res_table2);
		} else {
			let a = document.getElementById("matA");
			let b = document.getElementById("matB");
			document.body.replaceChild(res_table1, a);
			document.body.replaceChild(res_table2, b);
			
		}
		
	}


	// output matrix
	output_matrix () {
		let A = table_to_array('matA');
		let B = table_to_array('matB');
		let res_matrix = new MultiplyMatrix(A,B).multiply();
		
		var res_table = document.createElement("table");
		res_table.id = 'res_id'

		for (let i = 0; i < res_matrix[0].length; i++) {
			var row = document.createElement("tr");
			for (let j = 0; j < res_matrix.length; j++) {
				var column = document.createElement("td");

				var input_teg = document.createElement("input",[this.type="text", this.value='0']);
				input_teg.setAttribute('readonly','True');
				column.appendChild(input_teg);

				var content = res_matrix[i][j];
				input_teg.setAttribute('value',content);
				row.appendChild(column);
			}
			res_table.appendChild(row);
		}

		// win_output
		if (document.getElementById("res_id")==null){
			var titl = document.createElement("h2"); 
			titl.appendChild(document.createTextNode("Result"));
			document.body.appendChild(titl);
			document.body.appendChild(res_table);
		} else {
			// document.getElementById("res_id").innerHTML = "";
			let a = document.getElementById("res_id");
			document.body.replaceChild(res_table, a);
		}
			
	}
}

let html_getter = function(){
	f = new Generate();
	return f.input_matrix();
}

let html_otter = function(){
	f = new Generate();
	return f.output_matrix()
}

window.innerHTML


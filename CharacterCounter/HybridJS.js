function newPage() {
	var divText = document.getElementById("tbl").outerHTML;
	var myWindow = window.open('', '', 'width=200,height=100');
	var doc = myWindow.document;
	doc.open();
	doc.write(divText);
	doc.close();
} 

function myFunction() {

	//myTable creates the table rows and columns
	var myTable = "<table>";
	var occurence = document.getElementById("testinput").value;
	//Keep this at the top!
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var occ;
	var canvas = document.getElementsByTagName('canvas')[0];
	//This clears the canvas every time so you can draw in it
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.length);

	//This script changes the width of the canvas every time
	var includeEng = 0;
	if (document.getElementById("myCheckBox2").checked) {
		includeEng = 1;
	} else {
		includeEng = 0;
		canvas.width = 6090;
	}

	//The variables for the second checkbox
	var xy = 4608;
	if (includeEng === 1) {
		var xy = 100 - 3;
	}
	
	//List of arrays and variables
	var widthCheck = 0;
	var occArray = [];
	var occArrayUNS = [];
	var occChars = [];
	for (i = xy; i < 4988; i++) {
		//This makes sure no other unicode characters are used besides english and amharic
		if ((i > 122 && i < 4608) || i > 4988) {
			i++;
			continue;
		}
		//This counts the english and amharic characters
		var unicodeChar = String.fromCharCode(i);
		var counter = new RegExp(unicodeChar, 'g');
		var occ = (occurence.match(counter) || []).length;
		var occurence = document.getElementById("testinput").value;
		
		//This pushes the occ values into the "occArray" array
		var occPush = occArray.push(occ);
		occArrayUNS.push(occ);
		
		//This pushes all the unicode characters into the array occChars
		occChars.push(unicodeChar);
		
		//This sorts the occArray every time the for loop runs
		var sortedNums = occArray.sort(function(a, b) {return b - a});

		if (occ > 0) {
			widthCheck++;
		}

		var amountOf = widthCheck;
		var amountOfNum = document.getElementById("testinput").value;
		var amountOfNumE = amountOfNum.replace(/\s+/g, "");
		var amountOfNumL;
 		//Changes graph settings according to which radio is checked
		if (document.getElementById("directPercentage").checked) {
			amountOfNumL = amountOfNumE.length;
		} else {
			amountOfNumL = occArray[0];
		}
		//This is the script to determine the width of the canvas
		var numberOf;
		if (document.getElementById("myCheckBox2").checked === false) {
			numberOf = 7600;
		} else {
			numberOf = 8150;
		}

		//This checks to see if first the checkbox is, well, checked
		if (document.getElementById("myCheckBox1").checked === false) {
			canvas.width = (20 * amountOf) + 10;
		} else {
			canvas.width = numberOf;
		}
		canvas.style.overflowX = scroll;
	}

	var x = 0;
	
	//Excludes all other unicode characters besides english and amharic(because lag)
	for (i = xy; i < 4988; i++) {
		if ((i > 122 && i < 4607) || i > 4988) {
			i++;
			continue;
		}
		unicodeChar = String.fromCharCode(i);
		counter = new RegExp(unicodeChar, 'g');
		occ = (occurence.match(counter) || []).length;
		
		function tabGraphCode() {
			//The rest of this code creates the canvas graph
			var percent = (occ / amountOfNumL).toFixed(2);
			ctx.fillStyle = "#009933";
			ctx.fillRect(20 * x + 10, canvas.height - 15, 10, -0.85 * (canvas.height * percent));
			if (occ !== 0) {
				ctx.fillStyle = "#339966"
				ctx.fillText((((percent) * 100).toFixed(0)) + "%", 20 * x + 10, -0.85 * (canvas.height * percent) + (canvas.height - 18));
			}
			ctx.fillStyle = "#009933";
			ctx.fillText(unicodeChar, 20 * x + 10, canvas.height - 5);
			x++;
		}
		//Checkin' (if) the checkboxes (are checked)
		if (document.getElementById("myCheckBox1").checked) {
			//This creates the table
			tableVals();
			tabGraphCode();
		} else {
			tableVals();
			if (occ !== 0) {
				tabGraphCode();
			} else {
				ctx.fillRect(15 * x + 10, canvas.height - 10, 10, 0);
			}
		}
		
		//Sorts the table into 8 rows
		function tableVals() {
			//Detects and deletes (almost) all cells with an undefined value
			if (occArrayUNS[0] !== undefined) {
				for (j = 0; j < 1; j++) {
					myTable += "<tr>";
					for (k = 0; k < 8; k++) {
						if (k === 0) {
							myTable += "<td style='width: 50px; border: 1px solid black;'>" + occChars[0] + "</td>";
							occChars.splice(0, 8);
						}
						myTable += "<td style='width: 50px; border: 1px solid black;'>" + occArrayUNS[0] + "</td>";
						occArrayUNS.shift();
						}
					myTable += "</tr>";
				}	
			} else {
				this.remove;
			}
		}
	}
	myTable += "</table>";
	document.getElementById("displayTable").innerHTML = (myTable);
}

//Prints table div
function Print(divName) {
	var printContents = document.getElementById(divName).innerHTML;
	var originalContents = document.body.innerHTML;
	document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = originalContents;
}
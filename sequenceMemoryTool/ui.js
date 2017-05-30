var sequenceArray = [];
var numberArray = [];
function run()
{
	var sequenceString = String(document.getElementById("sequence").value);
	sequenceArray = sequenceString.split(",");
	numberArray = [];
	for(var g=0;g<sequenceArray.length;g++)
		{
			numberArray.push(g);
		}
	document.getElementById("sequence").style.visibility = "hidden";
	document.getElementById("submit").style.visibility = "hidden";
	document.getElementById("memoryBlock").style.visibility = "visible";
	document.getElementById("nextButton").style.visibility = "visible";
	document.getElementById("resetButton").style.visibility = "visible";
	document.getElementById("memoryBlock").innerHTML = changeTable(sequenceArray);
}

function changeTable(inputArray)
{
	var stringOfTableChange = "";
	var beginning = "<tr><td>";
	var ending = "</td></tr>";
	for(var i=0;i<inputArray.length;i++)
	{
		stringOfTableChange = stringOfTableChange.concat(beginning+inputArray[i]+ending);
	}
	
	return stringOfTableChange;
}

function startOver()
{
	document.getElementById("sequence").style.visibility = "visible";
	document.getElementById("submit").style.visibility = "visible";
	document.getElementById("memoryBlock").style.visibility = "hidden";
	document.getElementById("nextButton").style.visibility = "hidden";
	document.getElementById("resetButton").style.visibility = "hidden";
	document.getElementById("backButton").style.visibility = "hidden";
}
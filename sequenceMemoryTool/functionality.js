var lastContent = "";
var lastPosition = -1;
var lastRandom = -1;

function omitRandomRow()
{
	var newRandom = getRandomInt(0,numberArray.length);
	lastRandom = newRandom;
	lastPosition = numberArray.slice(newRandom,newRandom+1);
	lastContent = sequenceArray[lastPosition];
	sequenceArray[numberArray.splice(newRandom,1)]="_";
	document.getElementById("memoryBlock").innerHTML = changeTable(sequenceArray);
	document.getElementById("backButton").style.visibility = "visible";
}

function back()
{
	sequenceArray[lastPosition] = lastContent;
	numberArray = numberArray.concat(lastPosition,numberArray.splice(lastRandom,numberArray.length));
	document.getElementById("memoryBlock").innerHTML = changeTable(sequenceArray);
	document.getElementById("backButton").style.visibility = "hidden";
}

function getRandomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
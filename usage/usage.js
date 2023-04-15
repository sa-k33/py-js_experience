var targenum = Math.floor(Math.random() * 100) + 1;
function guessnumber(){
	var gus = document.getElementById("guessInput").value;
	var result = "";
	if (isNaN(gus) || gus < 1 || gus > 100) {
        document.getElementById("a").innerHTML = "Please enter a valid number between 1 and 100.";
        return;
		}
	if (gus == targenum) {
        result = "Yes! The target number was "+ gus;
		document.getElementById("a").innerHTML = result;
		return;
		}
	document.getElementById("a").innerHTML = "2";
    if (gus > targenum) {
        result += " The number is NOT " + gus + "  and higher than the target number.";
    }else {
        result += " The number is NOT " + gus + " and smaller than the target number.";
		}

    if (Math.abs(targenum - gus) >= 10) {
        result += " The number is too far away!";
    }else {
        result += " It\'s close.";
		}
	document.getElementById("a").innerHTML = result;
	return;
}
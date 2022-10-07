var miles;
var gallons;
var mpg;
var again = "y";

do {
    miles = parseFloat(prompt("Enter miles driven"));
    gallons = parseFloat(prompt("Enter size of gas tank in gallons"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0){
        mpg = parseInt(miles / gallons);
        document.write("Miles per gallon:" +  mpg);
    } else {
        window.alert("One or both entries is invalid!");
    }
    again = window.prompt("Repeat entries (y/n)");
} while (again === "y");

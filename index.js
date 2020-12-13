var temperature = 16;
var raining = true;
if (temperature < 0) {
    console.log("Brr! Don't freeze out there!");
} else if (temperature < 15 || raining === true) {
    console.log("Don't forget a jacket!");
} else if (temperature < 25) {
    console.log("Have a nice day :)");
} else {
    console.log("Keep cool today!");
}
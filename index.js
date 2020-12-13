// var temperature = 16;
// var raining = true;
// if (temperature < 0) {
//     console.log("Brr! Don't freeze out there!");
// } else if (temperature < 15 || raining === true) {
//     console.log("Don't forget a jacket!");
// } else if (temperature < 25) {
//     console.log("Have a nice day :)");
// } else {
//     console.log("Keep cool today!");
// }
function myFunction() {

    let x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("ydate").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Akan Name";
    } else {
        text = "Not Akan Name";
    }
    document.getElementById("akan-name").innerHTML = text;
}
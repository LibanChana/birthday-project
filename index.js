var maleName = ["kwasi", "kwandwo", "kwabena", "kwaku", "Yaw", "Koffi", "Kwame"]
var femaleName = ["Akosua", "Adwao", "Abena", "Akua", "Yaa", "Afua", "Ama"]

function getday() {


    var year = document.getElementById(" year").value;
    var month = parseInt(document.getElementById(" month").value);
    var day = parseInt(document.getElementById(" day").value);
    var gender = parseInt(document.getElementById(" gender").value);
    var clear = document.getElementById(" clear").reset;

    var yy = parseInt(year.substr(2, 4));
}

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
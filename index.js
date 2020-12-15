function dateSubmit() {

    let males = [" Kwasi", " Kwandwo", " Kwabena", " Kwaku", " Yaw", " Kofi", " Kwame"];
    let females = [" Akosua", " Adwoa", " Abenaa", " Akua", " Yaa", " Afua", " Ama"];

    let year = document.getElementById("year").value;
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let gender = document.getElementById("gender").value;
    let yy = parseInt(document.getElementById("year").value.substr(2, 4));


    let century = parseInt(year.substr(0, 2));

    let date = Math.abs(parseInt(((century / 4) - 2 * century - 1) + ((5 * yy / 4)) + ((26 * (month + 1) /
        10)) + day) % 7)


    if (year <= 0 || year == "" || year > 2020) {

        (document.getElementById('name').innerHTML = ("Invalid year"));
    }
    if (month === 2) {
        if (day === 29) {
            if (year % 4 != 0 || year % 100 == 0 && year % 400 != 0) {
                document.getElementById('name').innerHTML = ("Invalid date");
                field.value = month + '/' + '';
            }
        } else if (day > 28) {
            document.getElementById('name').innerHTML = localStorage.getItem("Invalid date");
            field.value = month + '/' + '';
        }
    } else
    if (month <= 0 || month > 12) {
        document.getElementById('name').innerHTML = localStorage.getItem("Invalid month")
    } else
    if (day < 1 || day > 31) {
        document.getElementById('name').innerHTML = localStorage.getItem("Invalid date")

    }

    if (gender === "male") {
        // localStorage.setItem(males[date])
        console.log(males[date]);
        alert(females[date])
    } else
    if (gender === "female") {
        console.log(females[date]);
        alert(females[date])
    }
}
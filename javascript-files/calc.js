function calculate() {
    var yourName = document.getElementById("yournamefield").value;
    var crushName = document.getElementById("crushnamefield").value;

    // To get capital letter in both names
    var capYourName = yourName.slice(0, 1);
    var fullYourName = yourName.slice(1, 100);
    var capYourName = capYourName.toUpperCase();

    var capCrushName = crushName.slice(0, 1);
    var capCrushName = capCrushName.toUpperCase();
    var fullCrushName = crushName.slice(1, 100);
    // Combine capYourName + fullYourName and capCrushName + fullCrushName to get full name with capital initial letters in your output..

    if (yourName == "" || crushName == "") {
        document.getElementById("output-data").innerHTML = ("You need to enter both names!");
    } else {
        var result = Math.random();
        result = result * 100;
        result = Math.floor(result);

        document.getElementById("output-data").innerHTML = ("Done! " + capYourName + fullYourName + " is matched with " + capCrushName + fullCrushName + " with a total of " + result + " %!");

        document.getElementById("userForm").reset();
    }
    return;
}
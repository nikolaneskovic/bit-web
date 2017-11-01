function Validate() {

    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        var input = inputElements[i];
        if (input.hasAttribute("required") && input.value === "") {
            input.classList.add("red-border");
        } else {
            input.classList.remove("red-border");
        }
    }


}
var automatic;

function change(){

    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("background");

}

function turnOff(){
    clearInterval(automatic);
    body.classList.remove("background");

}

function haos(){

    automatic = setInterval(change,1000);
}

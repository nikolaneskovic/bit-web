function removeB(){
    var prvired = document.getElementsByClassName("prva")[0];
    prvired.className = " ";

    var divWithClass  = prvired.parentElement;
    var newDivImage = prvired.nextElementSibling.firstElementChild;

    newDivImage.className = "prva";
}

removeB();

function alertList(){

    var listElements = document.getElementsByTagName("li");
    
    alert(listElements[0].textContent = "nekitekst");
}

alertList();

alert("bilosta");
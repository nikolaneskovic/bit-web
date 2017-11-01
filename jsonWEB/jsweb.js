function ispis(){
    console.log(navigator.vendor);
    console.log(navigator.platform);
    console.log(navigator.appVersion);
}




function isOnline(){
    if ( navigator.onLine){
        console.log("je online")
    
    }
    else {console.log("nije online")}

}

function novi(){
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.height);
}

function lokacija(){
    console.log(location.pathname);
    console.log(location.protocol);
    console.log(location.origin);
}


function reloader (){
    console.log(location.reload);
}


function slaganje(key,vrednost){
    localStorage.setItem(key,vrednost);


}


function citac(key){
    localStorage.getItem(key);
}

console.log(key);   
let passwort;
let pwArray;

let laenge = false;
let großbuchstabe = false;


function pwcheck() {
    passwort = document.getElementById("sample1").value;
    pwArray = passwort.split("");
    if (pwArray.length > 9) {
        document.getElementById("ausgabe").innerHTML = "sicheres Passswort";
        laenge = true;
    } else {
        document.getElementById("ausgabe").innerHTML = "unsicheres Passwort";
    }
}

function großbuchstabe() {
    if (
        /[a-z]/.pwArray
    )
}

function kleinbuchstabe() {

}

function 
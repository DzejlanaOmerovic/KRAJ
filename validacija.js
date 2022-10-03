let errorFlagm = false;
let errorFlagp = false;
let errorFlagi = false;
let pom = 0;

function validnoIme(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-Z]{1}[a-z]{3,10}$/) === null) {
        obj.style.color = 'red';
        document.getElementById("nameerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    else {
        obj.style.color = 'green';
        document.getElementById("nameerror").innerHTML = "";
        errorFlagi = true;
        return true;
    }
}

function validnoprezime(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-Z]{1}[a-z-]{3,10}$/) === null) {
        obj.style.color = 'red';
        document.getElementById("nameerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    else {
        obj.style.color = 'green';
        document.getElementById("nameerror").innerHTML = "";
        errorFlagp = true;
        return true;
    }
}

function validanMejl(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-Z]{1}[A-Z0-9.*(){}&^#@!$/_?|><%+-]{1,}[A-Z0-9]+@[A-Z]+(?:\.[A-Z]+)*$/i) === null) {
        obj.style.color = 'red';
        document.getElementById("mailerror").innerHTML = "Unos nije dobar!";
        pom = 1;
        return false;
    }
    else {
        pom = 0;
        obj.style.color = 'green';
        document.getElementById("mailerror").innerHTML = "";
        errorFlagm = true;
        return true;
    }
}


function validnaPoruka(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-zA-Z0-9.!*(){}&^#@$/_?|><%+-,;:\s]{1,490}$/) === null) {
        obj.style.color = 'red';
        document.getElementById("porerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    else {
        obj.style.color = 'green';
        document.getElementById("porerror").innerHTML = "";
        errorFlag = true;
        return true;
    }

}

function proveri() {

    if (!errorFlagi) {
        alert('PORUKA NIJE POSLATA!!! Ime je nepravilno uneto. Pocetno slovo mora biti veliko!');
        pom = 1;

    }
    if (!errorFlagm) {
        alert('PORUKA NIJE POSLATA!!! MEIL JE NEPRAVILNO UNET. Ponovite vas unos.');
        pom = 1;
    }

    if (!errorFlagp) {
        alert('PORUKA NIJE POSLATA!!! Prezime je nepravilno uneto.');

        pom = 1;
    }

    if (pom == 0 ) {
        alert('Poruka je poslata. Hvala na prijavi');

    }
}
 
function notAvailable() {
    window.alert("Bientôt disponible");
}

function CheckBox(){
    document.getElementById("Nav").style.display = "none";  
    const check = document.getElementById("btn");
    const Nav = document.getElementById("Nav")
    if (check.checked){
        console.log("nav ouverte");
        document.getElementById("Nav").style.display = "flex";
    }
    else{
        console.log("nav fermer")
        document.getElementById("Nav").style.display = "none";
    }
}


function RunButton1() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const Page1 = document.getElementById("Page1");
    const test = "Test"

    //changer couleur bouton
    button2.classList.remove('active');
    button3.classList.remove('active');
    button1.classList.add('active');
    console.log("Le bouton 1 a ete cliquer")
};

function RunButton2() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.classList.remove('active');
    button3.classList.remove('active');
    button2.classList.add('active');
    console.log("Le bouton 2 a ete cliquer")

    const pageImportee = document.querySelector('object').contentDocument;
    const divAImporter = pageImportee.querySelector('#Page2');
    document.body.appendChild(divAImporter);
};

function RunButton3() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.add('active');
    console.log("Le bouton 3 a ete cliquer")
};

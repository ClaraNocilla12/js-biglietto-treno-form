let bottoneAnnulla = document.getElementById("b_annulla");
let bottoneGenera = document.getElementById("b_genera");

let biglietto = document.getElementById("biglietto");

let nomeCognomeDef;

let nomeCognome = document.getElementById("nome_cognome");
let km = document.getElementById("km");
let eta = document.getElementById("eta");
let sconto;



function getRandomInt(max) {
    return Math.floor(Math.random() * max +1);
}








bottoneGenera.addEventListener('click',

    function () {
        document.getElementById("nome_passeggero").innerHTML =  nomeCognome.value ; 
        if (eta.value == "overDiciotto") {
            document.getElementById("offerta_passeggero").innerHTML = "Biglietto Standard";
        } else if (eta.value == "underDiciotto") {
            document.getElementById("offerta_passeggero").innerHTML = "Ridotto under 18";
        } else{
            document.getElementById("offerta_passeggero").innerHTML = "Ridotto over 65";
        }

        document.getElementById("carrozza").innerHTML = getRandomInt(20);
        document.getElementById("codeCp").innerHTML = getRandomInt(99998);

        let prezzo = km.value * 0.21;
        if (eta.value == "underDiciotto") {
            sconto = prezzo * 0.2;
            prezzo -= sconto;
        } else if (eta.value == "overSessantacinque") {
            sconto = prezzo * 0.4;
            prezzo -= sconto;
        }

        document.getElementById("costo_biglietto").innerHTML = `Euro ${prezzo.toFixed(2)}` ; 

        
        
        biglietto.className =  "d-block";

    }

);

bottoneAnnulla.addEventListener( 'click',

    function(){

        
        biglietto.className =  "d-none";

    }

);
// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati
// e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi
// stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 

// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per
// il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const chilometriInput = document.getElementById("km");
const nomeUtente = document.getElementById("name");
const button = document.getElementById("btn");
const etaInput = document.getElementById("eta");
const output = document.querySelector(".result");
console.log(chilometriInput, nomeUtente, button, etaInput);

button.addEventListener("click", function () {

    const chilometriDaPercorrere = parseInt(chilometriInput.value);
    if (isNaN(chilometriDaPercorrere)) {
        alert("Errore: devi inserire i chilometri che vuoi percorrere!");
    } else if (chilometriDaPercorrere < 1) {
        alert("I chilometri che hai inserito non sono validi!");
    } else {

        const etaUtente = parseInt(etaInput.value);

        if (isNaN(etaUtente)) {
            alert("Errore: devi inserire la tua età!");
        } else if (etaUtente < 1) {
            alert("La tua età non è valida!");
        }

        let tariffaBase = chilometriDaPercorrere * 0.21;
        let prezzoFinale = "";

        let scontoGiovani = tariffaBase * 0.20; //sconto 20%
        let scontoAnziani = tariffaBase * 0.40; //sconto 40%

        let prezzoScontato = tariffaBase;

        if (etaUtente < 18) {
            prezzoScontato = tariffaBase - scontoGiovani;

        } else if (etaUtente >= 65) {
            prezzoScontato = tariffaBase - scontoAnziani;

        }

        prezzoFinale = `Il prezzo del tuo biglietto è ${prezzoScontato = prezzoScontato.toFixed(2)}€`;

        output.innerText = prezzoFinale;
    }
})







// let tariffaBase = chilometriDaPercorrere * 0.21;


// let scontoGiovani = tariffaBase * 0.20; //sconto 20%
// let scontoAnziani = tariffaBase * 0.40; //sconto 40%

// let prezzoScontato = tariffaBase;

// if (etaUtente < 18) {
//     prezzoScontato = tariffaBase - scontoGiovani;

// } else if (etaUtente >= 65) {
//     prezzoScontato = tariffaBase - scontoAnziani;

// }

// console.log(`Il prezzo del tuo biglietto è ${prezzoScontato = prezzoScontato.toFixed(2)}€`);

// }
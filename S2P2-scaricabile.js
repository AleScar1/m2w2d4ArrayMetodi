// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

//Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador"
//1 array - UTENTI utentiEcommerce
let utentiEcommerce = [];

utentiEcommerce.push(marco);
utentiEcommerce.push(paul);
utentiEcommerce.push(amy);

console.log(utentiEcommerce);

for (let i = 0; i < utentiEcommerce.length; i++) {
  let utente = utentiEcommerce[i];

  if (utente.isAmbassador) {
    console.log(utente.name + " " + utente.lastName + " e' un ambassador");
  } else {
    console.log(utente.name + " " + utente.lastName + " non e' un ambassador");
  }
}

//Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
//2 array - UTENTI ambassador 

let utenteAmbassador = [];

utenteAmbassador.push(marco);

console.log(" solo utente Ambassador: " + utenteAmbassador);

//----------------------
//--------------------------------------------logica per un sito di e-commerce----------------------------------------------------------------------
//----------------------

//--------------------------------------------totaleCarrello----------------------------------------------------------------------------------------
let totaleCarrello = 0;

for (let i = 0; i < prices.length; i++) {
  totaleCarrello = totaleCarrello + prices[i];
}

console.log("totale del Carrello: ", totaleCarrello);

// per la somma si puo usare anche reduce 
// esempio
// let totaleCarrello = prices.reduce((total, item) => total + item, 0);
// console.log("totale del Carrello: ", totaleCarrello);

//-----------------------------------------------------------------


if (totaleCarrello > 100 && utenteCheEffettuaLAcquisto.isAmbassador) {
  totaleCarrello = totaleCarrello * 0.7;
  totaleOrdine = totaleCarrello;
  console.log("Spedizione gratuita e sconto del 30% applicato.");
  console.log("totaleOrdine : " + totaleOrdine);
} else if (totaleCarrello <= 100 && utenteCheEffettuaLAcquisto.isAmbassador) {
  totaleCarrello = totaleCarrello * 0.7;
  totaleOrdine = totaleCarrello + shippingCost;
  console.log("Sconto del 30% applicato e spedizione a 50€.");
  console.log("totaleOrdine : " + totaleOrdine);
} else if (totaleCarrello > 100 && !utenteCheEffettuaLAcquisto.isAmbassador) {
  totaleOrdine = totaleCarrello;
  console.log("Spedizione gratuita, nessuno sconto applicato.");
  console.log("totaleOrdine : " + totaleOrdine);
} else if (totaleCarrello <= 100 && !utenteCheEffettuaLAcquisto.isAmbassador) {
  totaleOrdine = totaleCarrello + shippingCost;
  console.log("Nessuno sconto applicato e spedizione a 50€.");
  console.log("totaleOrdine : " + totaleOrdine);
}




























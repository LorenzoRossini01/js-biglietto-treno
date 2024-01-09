// richiesta lunghezza del viaggio
const tripLength = parseInt(
  prompt(
    "Quanto sarà lungo il tuo viaggio? (in km; la tariffa base sarà di 0.21€/km)"
  )
);
console.log("la lunghezza del viaggio sarà: " + tripLength);

// richiesta età utente
const userAge = parseInt(
  prompt("Inserisci la tua età per sapere se hai diritto ad uno sconto")
);
console.log("l'età dell'utente è: " + userAge);

const ratePerKm = 0.21;
console.log(ratePerKm + "€/km");

if (userAge > 18 && userAge < 65) {
  const ticketPrice = (tripLength * ratePerKm).toFixed(2);
  console.log(ticketPrice);
} else if (userAge < 18) {
  const under18Discount = 20 / 100;
  console.log("lo sconto applicato sarà" + under18Discount);

  const ticketPrice = (tripLength * ratePerKm * under18Discount).toFixed(2);
  console.log(ticketPrice);
} else {
  const over65Discount = 40 / 100;
  console.log("lo sconto applicato sarà" + over65Discount);

  const ticketPrice = (tripLength * ratePerKm * over65Discount).toFixed(2);
  console.log(ticketPrice);
}

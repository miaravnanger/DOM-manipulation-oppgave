//ide: dagplanlegger: Trykk på en knapp og få generert en plan for dagen, mat, hobby/aktivitet og trening

const foods = [
  "Pizza med masse ost",
  "Sushi med laks",
  "En skikkelig taco-kveld",
  "Hjemmelaget suppe",
  "Burger med fries",
  "Pannekaker",
  "Pasta carbonara",
  "Grillet kylling med salat",
  "Vegansk curry",
  "Ramen",
];

const hobbies = [
  "Lese en bok",
  "Spille dataspill",
  "Tegne eller male",
  "Strikke eller hekle",
  "Lære et nytt programmeringstriks",
  "Se en film eller serie",
  "Prøve et nytt brettspill",
  "Ta bilder ute",
  "Skrive dagbok eller en liten tekst",
  "Bake noe godt",
];

const workouts = [
  "Gå en tur i nabolaget",
  "Jogge en kort runde",
  "Ta en yoga-økt",
  "Trene styrke med egen kroppsvekt",
  "Gå på fjelltur",
  "Sykle en liten tur",
  "Prøve en dansetrening",
  "Hoppe tau",
  "Trene med YouTube-video",
  "Spille fotball eller en ballidrett",
];

//lage en hovedseksjon med et paragraf som forteller hva nettsiden gjør,
// legg til klasselister for styling
// /fyll inn textcontent

//targeter knapper og div for å manipulere de
const foodBtn = document.querySelector("#food-btn");
const hobbyBtn = document.querySelector("#hobby-btn");
const workoutBtn = document.querySelector("#workout-btn");

const buttonDiv = document.querySelector(".buttons");


//lage en hoveedseksjon, lage et <p> med info om hva nettsiden gjør, gi de klasseliste, textcontent og appende alt til nettsiden.

const mainSection = document.createElement("section");
mainSection.classList.add("main-section");

const paragraph = document.createElement("p");
paragraph.classList.add("info-p");
paragraph.textContent = `Er du lei av å planlegge dagene dine?
  Sliter du med å velge hva du skal ha til middag for eksempel? Prøv denne dagplanlegger-generatoren!`;

document.body.append(mainSection);
mainSection.append(paragraph);

//div container som skal vise resultat
const container = document.createElement("div");
container.classList.add("container");

//lage p for matresultat, hobbyresultat og treningsresultat og gi de klasselister, appender alt
const foodResult = document.createElement("p");
foodResult.classList.add("results");

const hobbyResult = document.createElement("p");
hobbyResult.classList.add("results");

const workoutResult = document.createElement("p");
workoutResult.classList.add("results");

mainSection.append(buttonDiv); //flytter div-en med knappene inn i main section
container.append(foodResult, hobbyResult, workoutResult);
mainSection.append(container);

//få tilfeldige indexer fra de forskjellige arrayene og lagre de i nye variabler
let randomFood;
let randomHobby;
let randomWorkout;

//lage funksjoner som tar tilfeldige indexer fra de forskjellige arrayene, og putter resultatet i de riktige paragrafene i diven. Legger også til eventlistener på knappene
function generateFood() {
  randomFood = Math.floor(Math.random() * foods.length); //tilfeldig index fra arrayet, plasserer det i variabelen jeg laget over
  for (let i = 0; i < foods.length; i++) {
    if (i === randomFood) { //hvis i = randomFood, endre textcontent til foodResult til valgfri setning + den tilfeldige stringen
      foodResult.textContent = `Til middag kan du ha ${foods[i].toLowerCase()}`; 
    }
  }
}
foodBtn.addEventListener("click", generateFood);

function generateHobby() {
  randomHobby = Math.floor(Math.random() * hobbies.length);
  for (let i = 0; i < hobbies.length; i++) {
    if (i === randomHobby) {
      hobbyResult.textContent = `Når du vil finne på noe kan du ${hobbies[
        i
      ].toLowerCase()}`;
    }
  }
}
hobbyBtn.addEventListener("click", generateHobby);

function generateWorkout() {
  randomWorkout = Math.floor(Math.random() * workouts.length);
  for (let i = 0; i < workouts.length; i++) {
    if (i === randomWorkout) {
      workoutResult.textContent = `Når du er klar til å være litt aktiv kan du ${workouts[
        i
      ].toLowerCase()}`;
    }
  }
}

workoutBtn.addEventListener("click", generateWorkout);

//targeter resetknappen + div for å manipulere og style
const reset = document.querySelector(".reset");
mainSection.appendChild(reset);

const resetBtn= document.querySelector("#reset-btn");
//lager fuksjon som tømmer innholder til de forskjellige resultatene fra tidligere
function resetMe() {
foodResult.textContent = "";
hobbyResult.textContent = "";
workoutResult.textContent = "";



}
//lager eventlistener til reset knappen
resetBtn.addEventListener("click", resetMe);

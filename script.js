// oppgave 4 javascript, DOM manipulation
// ide:
// en side med en knapp som genererer en tilfeldig vits hver gang du trykker på den. Ha et array med forskjellige vitser, og generer tilfeldig verdi fra vitsen

//targeter knappen som skal generere en vits
const button = document.getElementById("my-btn");

// lager en container for vitsen og gir den en klasse og appender den til nettsiden
const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

//array  med alle vitsene
const jokes = [
  "Sist gang Leger uten grenser hadde stor innsamlingsaksjon, gjorde foreningen for dyslektikere en kjempeinnsats. Leger uten grenser mottok til sammen seks hundre gensere",
  " Hva får du hvis du kloner en sjørøver? En piratkopi",
  "En pasient våknet etter en operasjon og sa: - Det føles ut som om jeg fikk en hammer i hode.Doktoren: - Du gjorde det. Vi er tomme for narkose!",
  "Vet du hvordan Michael Jackson oppfant Moonwalken? Han tråkka i en hundedrit",
  "'Du må ikke tisse i vannet gutt!'- 'Men alle gjør jo det' sier Ole. 'Kanskje det, men ingen gjør det fra stupebrett'",
  "Alle barna spiste middag unntatt Klaus, han var saus",
  "Har du hørt om svensken som dro på isfiske og kom hjem med 20 kg is?",
  "Alle barna satt i båten untatt Kåre, han var åre",
  "Vet du hvorfor svensken alltid har dodøren åpen når han skal på do? Fordi at ingen skal se gjennom nøkkelhullet!",
  "Læreren: Hvor ligger Liverpool? Eleven: På ellevte plass i Premier League.",
  "Alle barna likte maten unntatt Ella, hun fikk salmonella.",
  "Alle barna tørket seg med dopapir unntatt Even, han brukte neven.",
  "Det var en gang, så ble den en korridor",
  "Hva får du hvis du river et A4-ark i to? Et puslespill for svensker!",
  "Har du hørt om den nye restauranten Karma? De har ingen meny. Du får det du fortjener.",
  "Og så var det svensken som kom to timer for sent til en avtale fordi rulletrappen hadde stoppet.",
  "-'Doktor, doktor, jeg tror jeg kan se inn i fremtiden.' -'Hvor lenge har De hatt det slik?' -'Siden neste tirsdag.'",
  "Pappa: 'Kan du si navnet på et dyr?' Ole: 'Kaffe.' Pappa: 'Kaffe er ikke et dyr.' Ole: 'Men mamma sa at kaffen har blitt dyr.'",
  "Har du hørt om svensken som levde så rolig liv at det tok ham tre uker å oppdage at han var i respirator?",
  "-'Hei, se! Det står en hund på togskinnene!' - 'Ja, det er sikkert en sporhund.'",
  "Hvorfor kan ikke jeg dukke, når Donald Duck?",
  "Hvilket tøy kan ikke vaskes? Syltetøy",
  "Hvorfor det ikke finnes isbiter i Sverige? De har ikke oppskriften",
  "Hørt om svensken som skulle drepe kanarifuglen sin? Han kastet den utfor et stup.",
  "En liten gutt spør faren: 'Far, hvor mye koster det å gifte seg?' -'Jeg vet ikke, gutten min, jeg betaler fremdeles!'",
  "En nervøs fabrikkarbeider viser kongen rundt i majonesfabrikken: 'Og her lager vi majestet, Deres majones'",
  "Alle barna hjalp til med posten unntatt Bente, det var henne de sendte.",
  "Alle barna likte oppholdet i Hollywood unntatt Gunilla, hun fikk rollen som Godzilla.",
  "Jeg har mange kjemi-vitser på lager, men jeg vet ikke hvordan folk vil reagere på dem.",
  "Alle barna hadde migrene unntatt Frode, det var han som slo dem i hodet.",
];
console.log(jokes.length);

//lag funksjon randomJoke

function showJoke() {
  for (let i = 0; i < jokes.length; i++);
 Math.floor(Math.random() * jokes.length);
}
console.log(yourJoke);

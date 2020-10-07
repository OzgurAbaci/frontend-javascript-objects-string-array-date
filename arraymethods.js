/* Opdracht 1*/
// We hebben een array met e-mailaddressen van medewerkers. Voer nu de volgende acties uit:

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl

emailadresses.push('m.westerbroek@novi.nl');
console.log(emailadresses);

// 1b. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit. (dus: bevat onze array n.stuivenberg@novi.nl?)

// OPTIE 1
const isNickThere = emailadresses.includes('n.stuivenberg@novi.nl');
console.log(isNickThere);


// OPTIE 2
// if (isNickThere === true) {
//     console.log("Nick is er!");
// }

// OPTIE 3
// if (emailadresses.includes('n.stuivenberg@novi.nl')) {
//     console.log("Nick is er!");
// }

// OPTIE 4
// console.log(emailadresses.includes('n.stuivenberg@novi.nl') && 'Nick bestaat!');



// 1c. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere collega, Tess,
// bij Novi is komen werken VOOR Melissa. Haar e-mailadres moet dus worden toegevoegd op de één na laatste plek: t.mellink@novi.nl

// OPTIE 1
const insertPlace = emailadresses.length - 1;
emailadresses.splice(insertPlace, 0, 't.mellink@novi.nl');
console.log(emailadresses);

// OPTIE 2: als we  niet zouden weten waar melissa staat in de array
// emailadresses.splice(emailadresses.indexOf("m.westerbroek@novi.nl"), 0, "t.mellink@novi.nl");



// 1c. Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// Deze functie achterhaalt het indexnummer van het oude emailadres en vervangt dit vervolgens voor het nieuwe adres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie

function replaceEmail(emailList, wrongEmail, replacementEmail) {
    const index = emailList.indexOf(wrongEmail);
    // ons geval staat hier eigenlijk, emailadresses[2] = m.vandergeest@novi.nl
    emailList[index] = replacementEmail;
}

replaceEmail(emailadresses, 'm.vandergeest@novi-education.nl', 'm.vandergeest@novi.nl');
console.log(emailadresses);

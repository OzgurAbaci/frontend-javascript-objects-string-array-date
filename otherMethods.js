/* Opdracht 1 */
// Schrijf een functie die de diameter van een cirkel verwacht als parameter en
// de omtrek van die cirkel bererekent en teruggeeft
// tip: PI * diameter
// ---- Verwachte uitkomsten:
// 4 geeft 12.566370614359172
// 12 geeft 37.69911184307752

function perimeter(diameter) {
    return Math.PI * diameter;
}

console.log(perimeter(4));

/* Opdracht 2 */
// Schrijf bovenstaande functie nogmaals, maar zorg er nu voor dat de uitkomst wordt afgerond
// ---- Verwachte uitkomsten:
// 4 geeft 13
// 12 geeft 38


function perimeterRounded(diameter) {
    return Math.round(Math.PI * diameter);
}

perimeterRounded(4);

/* Opdracht 3 */
// Schrijf een functie die het laatste karakter in een string teruggeeft
// ---- Verwachte uitkomsten:
// "vermicelli" geeft "i"
// "kroepoek" geeft "k"

// OPTIE 1 (geeft het karakter op dit indexnummer terug)
function lastCharacter(word) {
    const index = word.length - 1;
    // const index = word.lastIndexOf(word);
    return word.charAt(index);
}

// OPTIE 2 (knipt de laatste letter van het woord eraf)
const lastChar = word => word.slice(-1);

console.log(lastCharacter("vermicelli"));
console.log(lastChar("vermicelli"));


/* Opdracht 4 */
// Schrijf een functie die een array maakt van alle woorden in een zin, maar wanneer er
// spaties aan het begin of einde van de zin staan, deze niet in de array zet.
// ---- Verwachte uitkomsten:
// " De pot verwijt de ketel dat hij zwart ziet" geeft ['De', 'pot', 'verwijt', 'de', 'ketel', 'dat', 'hij', 'zwart', 'ziet'];
// "Niet geschoten is altijd mis " geeft [ 'Niet', 'geschoten', 'is', 'altijd', 'mis' ];

function split(saying) {
    return saying.trim().split(" ");
}

console.log(split("Niet geschoten is altijd mis "));

/* Opdracht 5 */
// Maak een variabele today aan en sla daar een nieuw date-object in op
// Print in de console (in nummers) in welke maand we nu zitten
// Print in de console (in nummers) welk uur van de dag het is

const today = new Date();

console.log(today.getMonth());
console.log(today.getHours());

/* BONUS OPDRACHT (als je tijd over hebt) */
// Schrijf een functie die twee strings als parameters verwacht en de langste naam teruggeeft.
// als de namen beide even lang zijn geeft hij de string "Beide namen zijn even lang" terug
// ---- Verwachte uitkomsten:
// "Nick", "Nova" geeft "Beide namen zijn even lang"
// "Mitchel", "Nick" geeft "Mitchel"

// OPTIE 1
function longestName(nameOne, nameTwo) {
    const firstName = nameOne.length;
    const secondName = nameTwo.length;

    if (firstName === secondName) {
        return "Beide namen zijn even lang";
    }
    // Mag ook als:
    // return nameOne.length === nameTwo.length && "Beide namen zijn even lang";

    if (firstName > secondName) {
        return nameOne;
    }

    return nameTwo;
}

console.log(longestName("Mitchel", "Nick"));
console.log(longestName("Nova", "Nick"));
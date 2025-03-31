// Tema
// 1) Sa se creeze 2 variabile: 
// una care sa contina suma de bani pe care o are o persoana ( number ) 
// si una care indica statusului unui magazin ( daca este deschis sau nu ). 
// Daca magazinul este deschis, iar persoana are peste $5, sa se afiseze 
// "You can buy ice cream", altfel "Sorry, you can not buy ice cream".
let number = 5;
let shopStatus = "true";

if (shopStatus = true && number >= 5) {
    console.log("You can buy ice cream");
} else {
    console.log("Sorry, you can not buy ice cream");
}

if (shopStatus = false && number >= 5) {
    console.log("You can buy ice cream");
} else {
    console.log("Sorry, you can not buy ice cream");
}

// 2) Sa se creeze o variabila care contine varsta unei persoane. 
// Daca varsta este sub 12 -> "copil"; daca este intre 12 si 18 -> adolescent; 
// daca este intre 18-65 -> adult; altfel "Senior"
let age = 6;

if (age <= 11 ) {
    console.log("copil");
} else 
if (age >= 12 && age <= 18) {
    console.log("adolescent");
} else 
if (age >= 19 && age <= 65) { 
    console.log("adult");
} else {
    console.log("Senior");
}

let ageTwo = 16;
if (ageTwo <= 11 ) {
    console.log("copil");
} else 
if (ageTwo >= 12 && ageTwo <= 18) {
    console.log("adolescent");
} else 
if (ageTwo >= 19 && ageTwo <= 65) { 
    console.log("adult");
} else {
    console.log("Senior");
}

let ageThree = 26;
if (ageThree <= 11 ) {
    console.log("copil");
} else 
if (ageThree >= 12 && ageThree <= 18) {
    console.log("adolescent");
} else 
if (ageThree >= 19 && ageThree <= 65) { 
    console.log("adult");
} else {
    console.log("Senior");
}

let ageForth = 66;
if (ageForth <= 11 ) {
    console.log("copil");
} else 
if (ageForth >= 12 && ageForth <= 18) {
    console.log("adolescent");
} else 
if (ageForth >= 19 && ageForth <= 65) { 
    console.log("adult");
} else {
    console.log("Senior");
}

// 3) Sa se creeze 2 variabile: una pentru varsta unei persoane si una care indica daca acea persoana
// este VIP in cadrul unui club sau nu. Daca persoana are peste 21 si este VIP, atunci sa se afiseze 
// in consola "Welcome"; daca are sub 21, dar este VIP sa se afiseze "You don't have the minimum required 
// age"; daca are peste 21, dar nu este VIP sa se afiseze "You must become a VIP first"; 
// daca nu indeplineste nicio conditie "Access denied".

let personAge = 20;
let isVIP = "true";

if (personAge >= 21 && isVIP === true) {
    console.log("Welcome");
} 
else 
if (personAge < 21 || isVIP === true) {
    console.log("You don't have the minimum required age");
} 
else
if (personAge >= 21 && isVIP !== true) {
    console.log("You must become a VIP first");
} 
else
if (personAge < 21 || isVIP !== true) {
    console.log("Access denied");
}

// 4) Sa se creeze 2 variabile: una contine numele zilei curente ( string ), a doua contine ora curenta ( number ). 
// Sa se scrie niste cod care afiseaza "Open" daca clubul este deschis, altfel "Closed".
// Clubul este deschis:

// Vineri 22:00 - 04:00
// Sambata 22:00 - 06:00
// Duminica 20:00 - 02:00

// Cerinta extra: alaturat mesajului "Closed" sa se afiseze si cea mai apropiata data de deschidere. Exemple:

// a) ziua curenta este Marti, ora curenta 18 => se va afisa "Closed. Opens Friday at 22:00"

// b) ziua curenta este Sambata, ora curenta 15 => se va afisa "Closed. Opens Saturday at 22:00"

// Cerinta extra: alaturat mesajului "Open" sa se afiseze si ora de inchidere.

// Exemplu: ziua curenta este Sambata, ora 23 => se va afisa "Open. Closes Saturday 06:00"

let weekday = "Vineri";
let hour = 22;


if (weekday === "Vineri" || weekday === "Sambata" || weekday === "Duminica" ||
    hour === "22.00 - 04.00" || hour === "22.00 - 06.00" || hour === "20.00 - 06.00") {
    console.log("Open. Closes Saturday 06:00");
} else {
    console.log("Closed. Opens Friday at 22:00");
}






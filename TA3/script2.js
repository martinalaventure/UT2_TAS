// LOS QUE MUESTRAN EL RESULTADO EN EL DOC HTML, LO HACEN TRAS INGRESAR TODOS LOS DATOS DE LOS PROMPTS
// MANIPULACIÓN DE CADENAS

function repeatString ( texto, repeticiones){
    for (let i=0; i<repeticiones; i++){
        const p = document.createElement("p");
        p.textContent = texto;
        document.body.appendChild(p);
    }
}

let texto = prompt("Ingrese un texto");
let repeticiones = parseInt(prompt("Ingrese la cantidad de veces que desea repetir el texto"));
repeatString(texto, repeticiones);

function reverseString (texto){
    texto = texto.split("").reverse().join("");
    const p = document.createElement("p");
    p.textContent = texto;
    document.body.appendChild(p);
}

let texto2 = prompt("Ingrese un texto");

reverseString(texto2);

// PROCESAMIENTO DE ARREGLOS

function removeFromArray ( arreglo, item){
    arreglo = arreglo.split(",").filter(element => element.trim() !== item.trim());
    console.log(arreglo);
}

let arreglo = prompt("Ingrese un arreglo separado por comas");
let item = prompt("Ingrese el elemento que desea eliminar del arreglo");

removeFromArray(arreglo, item);

function getTheTitles(books) {
    let titles = [];
    for (let book of books){
        titles.push(book.title);
    }
    for (let title of titles){
        const h1 = document.createElement("h1");
        h1.textContent = title;
        document.body.appendChild(h1);
    }
    return titles;
}

let booksInput = prompt("Ingrese un arreglo de objetos con los campos title y author separados por comas");
let books = JSON.parse(booksInput);

getTheTitles(books); 

// FILTRADO Y TRANSFORMACIÓN

function getOdds(nums) {
    let numsArray = nums.split(",").map(Number);
    let odds = numsArray.filter(num => num % 2 !== 0);
    const p = document.createElement("p");
    p.textContent = odds;

    p.style.color = "purple";
    p.style.fontSize = "16px";

    document.body.appendChild(p);
    return odds
}

let nums = prompt("Ingrese un arreglo de números separados por comas");

getOdds(nums); 

function duplicates(nums) {
    let numsArray = nums.split(",").map(Number);
    let countMap = {};

    for (let num of numsArray) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    for (const [num, count] of Object.entries(countMap)) {
        if (count > 1) {
            const h4 = document.createElement("h4");
            h4.textContent = `Valor duplicado: ${num}`;
            const p = document.createElement("p");
            p.textContent = `Número de duplicados: ${count}`;
            document.body.appendChild(h4);
            document.body.appendChild(p);
        }
    }
}

let nums3 = prompt("Ingrese un arreglo de números separados por comas");

duplicates(nums3); 

// SUMA DE RANGO

function sumAll(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    let suma = a;
    while (a < b) {
        a++;
        suma += a;
    }
    const p = document.createElement("p");
    p.textContent = `Suma: ${suma}`;
    document.body.appendChild(p);
}

let a = prompt("Ingrese el primer número del rango");
let b = prompt("Ingrese el segundo número del rango");

sumAll(a, b); 

// CONVERSIÓN DE TEMPERATURA

function convertToCelsius(temp) {
    temp = parseFloat(temp);
    temp = (temp - 32) * 5/9;
    console.log(`Farenheit a Celsius: ${temp.toFixed(1)}`);
}

let temp = prompt("Ingrese la temperatura en Farenheit");

convertToCelsius(temp); 

function convertToFarenheit(temp) {
    temp = parseFloat(temp);
    temp = temp * 9/5 + 32;
    console.log(`Celsius a Farenheit: ${temp.toFixed(1)}`);
}

let temp2 = prompt("Ingrese la temperatura en Celsius");

convertToFarenheit(temp2); 

// DETERMINACIÓN DE AÑO BICIESTO

function leapYears(año) {
    año = parseInt(año);
    if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
        console.log(`${año} es bisiesto? `+ true);
    } else {
        console.log(`${año} es bisiesto? `+false);
    }
}

let año = prompt("Ingrese un año");

leapYears(año); 

// SUMA DE ELEMENTOS DE UN ARREGLO

function getSum(nums) {
    let numsArray = nums.split(",").map(Number);
    let sum = numsArray.reduce((acc, num) => acc + num, 0);
    console.log(`Suma: ${sum}`);
}

let nums2 = prompt("Ingrese un arreglo de números separados por comas");

getSum(nums2); 

// GENERACIÓN DE CONTRASEÑAS

function generatePassword(length) {
    const minLength = 8;
    length = Math.max(length, minLength);

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    var password = "";
    password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    const allChars = upperCaseChars + lowerCaseChars + numbers + specialChars;
    for (let i = password.length; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    console.log(password.split('').sort(() => Math.random() - 0.5).join(''));
}

let length = parseInt(prompt("Ingrese la longitud de la contraseña (mayor a 8 o se tomará como 8)"));
generatePassword(length); 
generatePassword(length);

// BÚSQUEDA DEL MÁS VIEJO

function findTheOldest(people){
    let oldest = null;
    let maxAge = 0;

    for (let person of people) {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
    }
    console.log(oldest);
}

let peopleInput = prompt("Ingrese un arreglo de objetos con los campos name, yearOfBirth y yearOfDeath separados por comas");
let people = JSON.parse(peopleInput);

findTheOldest(people);   


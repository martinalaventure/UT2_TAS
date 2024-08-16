// MANIPULACIÓN DE CADENAS

function repeatString ( texto, repeticiones){
    for (i=0; i<repeticiones; i++){
        console.log(texto);
    }
}

let texto = prompt("Ingrese un texto");
let repeticiones = parseInt(prompt("Ingrese la cantidad de veces que desea repetir el texto"));
repeatString(texto, repeticiones);

function reverseString (texto){
    console.log(texto.split("").reverse().join(""));
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
    console.log(titles);
}

let booksInput = prompt("Ingrese un arreglo de objetos con los campos title y author separados por comas");
let books = JSON.parse(booksInput);

getTheTitles(books); 

// FILTRADO Y TRANSFORMACIÓN

function getOdds(nums) {
    let numsArray = nums.split(",").map(Number);
    let odds = numsArray.filter(num => num % 2 !== 0);
    console.log(odds);
}

let nums = prompt("Ingrese un arreglo de números separados por comas");

getOdds(nums); 

function duplicates(nums) {
    let numsArray = nums.split(",").map(Number);
    let count = {};
    let duplicates = 0;

    for (let num of numsArray) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] > 1) {
            duplicates++;
        }
    }

    console.log(duplicates);
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
    console.log(suma);
}

let a = prompt("Ingrese el primer número del rango");
let b = prompt("Ingrese el segundo número del rango");

sumAll(a, b); 

// CONVERSIÓN DE TEMPERATURA

function convertToCelsius(temp) {
    temp = parseFloat(temp);
    temp = (temp - 32) * 5/9;
    console.log(temp.toFixed(1));
}

let temp = prompt("Ingrese la temperatura en Farenheit");

convertToCelsius(temp); 

function convertToFarenheit(temp) {
    temp = parseFloat(temp);
    temp = temp * 9/5 + 32;
    console.log(temp.toFixed(1));
}

let temp2 = prompt("Ingrese la temperatura en Celsius");

convertToFarenheit(temp2); 

// DETERMINACIÓN DE AÑO BICIESTO

function leapYears(año) {
    año = parseInt(año);
    if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

let año = prompt("Ingrese un año");

leapYears(año); 

// SUMA DE ELEMENTOS DE UN ARREGLO

function getSum(nums) {
    let numsArray = nums.split(",").map(Number);
    let sum = numsArray.reduce((acc, num) => acc + num, 0);
    console.log(sum);
}

let nums2 = prompt("Ingrese un arreglo de números separados por comas");

getSum(nums2); 

// GENERACIÓN DE CONTRASEÑAS

function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    console.log(password);
}

let length = parseInt(prompt("Ingrese la longitud de la contraseña"));
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


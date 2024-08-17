// SUMA DE RANGO

function sumAll(a, b) {
    let suma = a;
    while (a < b) {
        a++;
        suma += a;
    }
    const p = document.createElement("p");
    p.textContent = `Suma: ${suma}`;
    document.body.appendChild(p);
}

sumAll(1, 4); // 10

// CONVERSIÓN DE TEMPERATURA

function convertToCelsius(temp) {
    temp = (temp - 32) * 5/9;
    console.log(`Farenheit a Celsius: ${temp.toFixed(1)}`);
}

convertToCelsius(212); // 100.0

function convertToFarenheit(temp) {
    temp = temp * 9/5 + 32;
    console.log(`Celsius a Farenheit: ${temp.toFixed(1)}`);
}

convertToFarenheit(34); // 93.2

// DETERMINACIÓN DE AÑO BICIESTO

function leapYears(año) {
    if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
        console.log(`${año} es bisiesto? `+ true);
    } else {
        console.log(`${año} es bisiesto? `+false);
    }
}

leapYears(2020); // true

// SUMA DE ELEMENTOS DE UN ARREGLO

function getSum(nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    console.log(`Suma: ${sum}`);
}

getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
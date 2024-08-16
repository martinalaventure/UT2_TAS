// SUMA DE RANGO

function sumAll(a, b) {
    let suma = a;
    while (a < b) {
        a++;
        suma += a;
    }
    console.log(suma);
}

sumAll(1, 4); // 10

// CONVERSIÓN DE TEMPERATURA

function convertToCelsius(temp) {
    temp = (temp - 32) * 5/9;
    console.log(temp.toFixed(1));
}

convertToCelsius(212); // 100.0

function convertToFarenheit(temp) {
    temp = temp * 9/5 + 32;
    console.log(temp.toFixed(1));
}

convertToFarenheit(34); // 93.2

// DETERMINACIÓN DE AÑO BICIESTO

function leapYears(año) {
    if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

leapYears(2020); // true

// SUMA DE ELEMENTOS DE UN ARREGLO

function getSum(nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    console.log(sum);
}

getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
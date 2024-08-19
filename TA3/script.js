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

console.log("Tarea 1");
generatePassword(12); 
generatePassword(4);

// BÚSQUEDA DEL MÁS VIEJO

function findTheOldest(people){
    let oldest = people[0].yearOfDeath - people[0].yearOfBirth;
    for (person of people) {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldest) {
            oldest = person;
        }
    }
    console.log("Tarea 2");
    console.log(oldest);
    return oldest;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Joe",
        yearOfBirth: 1925,
        yearOfDeath: 1970,
    },
    {
        name: "Alice",
        yearOfBirth: 1980,
        yearOfDeath: 2020,
    },
  ]


findTheOldest(people);   



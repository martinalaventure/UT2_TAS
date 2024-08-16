// GENERACIÓN DE CONTRASEÑAS

function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    console.log(password);
}

generatePassword(8); 
generatePassword(8);

// BÚSQUEDA DEL MÁS VIEJO

function findTheOldest(people){
    let oldest = people[0].yearOfDeath - people[0].yearOfBirth;
    for (person of people) {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldest) {
            oldest = person;
        }
    }
    console.log(oldest);
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



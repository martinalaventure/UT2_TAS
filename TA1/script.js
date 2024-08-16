// MANIPULACIÓN DE CADENAS

function repeatString ( texto, repeticiones){
    for (i=0; i<repeticiones; i++){
        console.log(texto);
    }
}

repeatString("hola", 3);

function reverseString (texto){
    console.log(texto.split("").reverse().join(""));
}

reverseString("hola");

// PROCESAMIENTO DE ARREGLOS

function removeFromArray ( arreglo, item){
    arreglo=arreglo.filter((element)=>element!==item);
    console.log(arreglo);
}

removeFromArray(["hola","chau","buenas"], "chau");

function getTheTitles(books) {
    let titles = [];
    for (book of books){
        titles.push(book.title);
    }
    console.log(titles);
}

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
      title: 'Book3',
      author: 'Name3'
    },
    {
      title: 'Book4',
      author: 'Name4'
    }
  ]
  
getTheTitles(books); 

// FILTRADO Y TRANSFORMACIÓN

function getOdds(nums) {
    let odds = nums.filter((num) => num % 2 !== 0);
    console.log(odds);
}

getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 3, 5, 7, 9]

function duplicates(nums) {
    let count = {};
    let duplicates = 0;

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] > 1) {
            duplicates++;
        }
    }

    console.log(duplicates);
}

duplicates([1, 2, 2, 3, 4, 4, 4, 5]); // 2

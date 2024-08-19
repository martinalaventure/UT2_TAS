// MANIPULACIÓN DE CADENAS

function repeatString ( texto, repeticiones){
    for (let i=0; i<repeticiones; i++){
        const p = document.createElement("p");
        p.textContent = texto;
        document.body.appendChild(p);
    }
}
document.getElementById("submit").addEventListener("click", function(){
    const textInput = document.getElementById('textInput').value;
    const repeatInput = parseInt(document.getElementById('repeatInput').value, 10);
    repeatString(textInput, repeatInput);
});

function reverseString (texto){
    texto = texto.split("").reverse().join("");
    const p = document.createElement("p");
    p.textContent = texto;
    document.body.appendChild(p);
}
document.getElementById("submit2").addEventListener("click", function() {
    const text2Input = document.getElementById('text2Input').value;
    reverseString(text2Input);
});

// PROCESAMIENTO DE ARREGLOS

function removeFromArray ( arreglo, item){
    arreglo=arreglo.filter((element)=>element!==item);
    console.log("tarea 3")
    console.log(arreglo);
}

removeFromArray(["hola","chau","buenas"], "chau");

function getTheTitles(books) {
    let titles = [];
    document.body.appendChild(document.createElement("p")).textContent = "Tarea 4";
    for (book of books){
        titles.push(book.title);
    }
    for (let title of titles){
        const h1 = document.createElement("h1");
        h1.textContent = title;
        document.body.appendChild(h1);
    }
    return titles;
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
    document.body.appendChild(document.createElement("p")).textContent = "Tarea 5";
    let odds = nums.filter((num) => num % 2 !== 0);
    const p = document.createElement("p");
    p.textContent = odds;

    p.style.color = "purple";
    p.style.fontSize = "16px";

    document.body.appendChild(p);
    return odds
}

getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 3, 5, 7, 9]

function duplicates(nums) {
    document.body.appendChild(document.createElement("p")).textContent = "Tarea 6";
    let countMap = {};

    for (let num of nums) {
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

duplicates([1, 2, 2, 3, 4, 4, 4, 5]); // 2

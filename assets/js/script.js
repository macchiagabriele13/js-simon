/* Creo un bottone per far partire il gioco */

const bottoneGeneratore = document.querySelector(".btn_play")
console.log(bottoneGeneratore);

/* Inserisco una variabile box collegata all'html */

let numberBox = document.querySelector(".number_box")
console.log(numberBox);


/* Inserisco una variabile legata a ai numeri  */
let number = document.querySelector(".number")
console.log(number);



/* Aggiungo un addEventListener al click sul bottone  */

bottoneGeneratore.addEventListener('click', function () {

    numberBox.innerHTML = ''
    console.log("Bottone cliccato");

    numberBox.style.display = 'flex'

    


/* /* Visualizzare in pagina 5 numeri casuali. */

/* Utilizzo la funzione math per creare 5 numeri random */
/*  Poi creo una variabile e li inserisco dentro un paragrafo tramite la classe numeri */


function randomNumbers(min, max) {
    const numbersEl = document.querySelector('.number')

    let numbersArray = []
    for (i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        numbersArray.push(random)
        console.log(random)
    }
    console.log(numbersArray);
    numbersEl.innerHTML = numbersArray

    const string = numbersArray.join(' ')
    numbersEl.innerHTML = `${string}`
}

randomNumbers(0, 100)


/* Da lì parte un timer di 30 secondi. */

/* Creo un timer tramite una funzione time  */

/* Dopo 30 secondi i numeri scompaiono
    
        Creo un comando asincrono che faccia scomparire dopo 30 secondi il paragrafo  */

let seconds = 30
const intervalId = setInterval(countdown, 1000)

        setTimeout(timeClear, 30001)
        setTimeout(timeMemory, 30002);

function countdown() {
      document.querySelector('.counter').innerText = seconds;
      if (seconds == 0){
            /* numberCheck(arrayNumber, arrayNumberUser); */
           seconds.innerHTML = ('finito')
            
      } else {
            seconds--
      }
}


/* Dopo 30 secondi i numeri scompaiono */


function timeClear() {
    const numbersEl = document.querySelector('.number_box')
    numbersEl.classList.add('d-none')
}

/* e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */

/*   Creo un prompt e lo inserisco in un ciclo per mostrarlo 5 volte */

function timeMemory() {
    const userNumbersArray = []
    for (i = 0; i < 5; i++) {
        const UserMemoryNumber = Number((prompt('inserisci il numero che ti ricordi')))
        userNumbersArray.push(UserMemoryNumber)
    }
    console.log(userNumbersArray);
}

}) 
/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



/* ---------------------------------------------------------- */


/* Correzione Fabio */

/* Selezioniamo un elemento della dom dove insieriee number con queryselector 

const numbersElement = document.querySelector('.numbers')

const randomNumbers = generateNumbers()

function generateNumbers(){
    const numbers = []
    while (numbers.length !== 5 ) {
        const randomNumber = generateRandomNumber (min, max)
    if (!numbers.includes(randomNumber)) {
        numbers.push
    }    }
} */
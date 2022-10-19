/* Creo un bottone per far partire il gioco */

const bottoneGeneratore = document.querySelector(".btn_play")
console.log(bottoneGeneratore);

/* Inserisco una variabile box collegata all'html */

let numberBox = document.querySelector(".number_box")
console.log(numberBox);


/* Inserisco una variabile legata a ai numeri  */
let number = document.querySelector(".number")
console.log(number);


/* Inserisco variabile RandomNumber per Array */
let randomNumbers = []

/* Aggiungo un addEventListener al click sul bottone  */

bottoneGeneratore.addEventListener('click', function () {

    numberBox.innerHTML = ''
    console.log("Bottone cliccato");

    numberBox.style.display = 'flex'

    /* Dopo 30 secondi i numeri scompaiono
    
        Creo un comando asincrono che faccia scomparire dopo 30 secondi il paragrafo  */

    setTimeout(blackout, 30000);


    /* Visualizzare in pagina 5 numeri casuali. */

    /* Utilizzo la funzione math per creare 5 numeri random */
    /*  Poi creo una variabile e li inserisco dentro un paragrafo tramite la classe numeri */

    
   /*  randomNumbers(0, 100)

    function randomNumbers(min, max) {
        const numbersEl = document.querySelector('.number')
        
        let numbersArray = []
        for (i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            numbersArray.push(random)
            /* console.log(random) */
        /* } */
        /* console.log(numbersArray);
        numbersEl.innerHTML = numbersArray */

        /* const string = numbersArray.join(' ')
        numbersEl.innerHTML = `${string}` */
  /*   } */
    /* return randomNumbers */



    for(let i = 0; i < 5; i++){
        number = Math.floor(Math.random()*30)
        randomNumbers.push(number)
        console.log(randomNumbers)
    }
    
    number.innerHTML = randomNumbers


 }) 











/* Da lì parte un timer di 30 secondi. */

/* Creo un timer tramite una funzione time  */


/* Dopo 30 secondi i numeri scompaiono */
function blackout(parametro) {

}

/* e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */

/*   Creo un prompt e lo inserisco in un ciclo per mostrarlo 5 volte */


/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

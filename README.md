# JS Fizzbuzz

**Consegna:**

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**Procedimento:**

1. Creo una variabile container esterna
2. Apro il ciclo for da 1 a 100 con incremento di un numero alla volta
3. Nel ciclo dichiaro una variabile box per cui ad ogni ciclo si crea un elemento div, box è appendice di container
4. A box aggiungo la classe "box-normal" che corrisponde al quadrato normale colorato neutro
4. Nel ciclo metto un if con 4 condizioni:
- se il numero stampato è divisibile per 3, stampare fizz (al posto di i, appendice di box) e aggiungere al div la classe che colora il quadrato di verde
- se il numero stampato è divisibile per 5, stampare buzz e aggiungere al div la classe che colora il quadrato di giallo
- se il numero stampato è divisibile sia per 3 sia per 5, stampare fizzbuzz e aggiungere al div la classe che colora il quadrato di rosso
- altrimenti stampare i

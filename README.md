# JS Fizzbuzz

**Consegna:**

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**Procedimento:**

1. Creo due variabili chiamate box e container che richiamano in HTML le classi box e container.
2. Apro il ciclo for da 1 a 100 con incremento di un numero alla volta.
3. Nel ciclo metto un if con 4 condizioni:
- se il numero stampato è divisibile per 3, stampare fizz (al posto di i, quindi come appendice di box)
- se il numero stampato è divisibile per 5, stampare buzz
- se il numero stampato è divisibile sia per 3 sia per 5, stampare fizzbuzz
- altrimenti stampare i

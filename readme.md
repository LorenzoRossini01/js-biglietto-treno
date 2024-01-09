# Esercizio - js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Svolgimento

1. chiedere all'utente quanti km deve percorrere
2. chiedere all'utente quanti anni ha
3. calcolare il prezzo pieno del biglietto: km da percorrere \* 0.21 €/km

4. verificare SE l'utente ha un'età < di 18 anni per avere il 20% di sconto sul biglietto, ALTRIMENTI SE ha un'età > di 65 anni per avere il 40% di sconto, ALTRIMENTI mantentere il prezzo pieno

5. arrotondare il risultato ottenuto a 2 decimali

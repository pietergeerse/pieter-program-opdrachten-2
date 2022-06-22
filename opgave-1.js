module.exports = {isPositief}

/* Algoritmiek opgave #1
   Opdracht: pas de functie zo aan,
   dat de functie true geeft als 'getal'
   0 of positief is en false als 'getal'
   negatief is.
*/

function isPositief(getal) {
  var teruggeefWaarde = undefined;

  if(getal => 0){
    teruggeefWaarde = true;
  } 
  if(getal < 0){
    teruggeefWaarde = false;
  }
  

  return teruggeefWaarde;
}

// gedaan
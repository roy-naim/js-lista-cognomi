// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’, 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var surname = prompt("What's your last name?");

surname = surname.charAt(0).toUpperCase() + surname.slice(1); //charAt prendi l'elemento (carattere soprattutto) in pos. 0, applicchi poi metod. uppercase alla 1st lettera.
//slice method: ti ritorna indietro l'inizio...se vado a 1...
// surname = surname[0].toUpperCase() + surname.substring(1);

var surnamelist = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];


surnamelist.push(surname);

console.log(surnamelist.sort());

for(var i=0; i<surnamelist.length; i++){
  if(surnamelist[i] == surname){
     flag = i;
     flag++;
  }  document.getElementById('list').innerHTML += "<li>" + surnamelist[i] + "</li>";
}

document.getElementById('result').innerHTML = (surnamelist.indexOf(surname) + 1);
// i++ end

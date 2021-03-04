// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’, 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var surname = .toUpperCase(prompt("What's your last name?"));

var surnamelist = ["Bianchi ", "Rossi ", "Perlari ", "Lodigiani ", "Mastrobattista ", "Verdi "];

surnamelist.push(surname);

document.getElementById('list').innerHTML = surnamelist.sort();

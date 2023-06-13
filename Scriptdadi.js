function generaNumeri() {
    var numeroDadi = parseInt(document.getElementById('numero-dadi').value);
    var n = parseInt(document.getElementById('facce-dadi').value);
    var numeriParziali = [];
    var sommaTotale = 0;

    for (var i = 0; i < numeroDadi; i++) {
        var numeroCasuale = Math.floor(Math.random() * n) + 1; // Genera un numero casuale tra 1 e 6
        numeriParziali.push(numeroCasuale);
        sommaTotale += numeroCasuale;
    }

    document.getElementById('numeri-parziali').textContent = "Numeri parziali: " + numeriParziali.join(", ");
    document.getElementById('somma-totale').textContent = "Somma totale: " + sommaTotale;
}
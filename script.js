document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcola').addEventListener('click', function() {
        // Ottieni i valori degli input
        var numero1 = parseFloat(document.getElementById('numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value);
        
        // Verifica che i valori siano numeri
        if (isNaN(numero1) || isNaN(numero2)) {
            document.getElementById('risultato').textContent = 'Per favore, inserisci due numeri validi.';
            return;
        }

        // Calcola la somma
        var somma = numero1 + numero2;
        
        // Mostra il risultato
        document.getElementById('risultato').textContent = 'La somma è: ' + somma;
    });
});

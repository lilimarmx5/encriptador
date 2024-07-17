//Declaramos variables y funciones de botones.

document.addEventListener('DOMContentLoaded', function() {
    let encryptButton = document.getElementById('encrypt');
    let decryptButton = document.getElementById('decrypt');
    let copyButton = document.getElementById('copy');
    let inputText = document.getElementById('inputText');
    let resultText = document.getElementById('resultText');
    
       
    encryptButton.addEventListener('click', function() {
        let text = inputText.value;
        let encryptedText = encrypt(text);
        resultText.value = encryptedText;
    });

    decryptButton.addEventListener('click', function() {
        let text = inputText.value;
        let decryptedText = decrypt(text);
        resultText.value = decryptedText;
    });

    copyButton.addEventListener('click', function() {
        var resultText = document.getElementById('resultText');
        resultText.select();
        navigator.clipboard.writeText(resultText.value);
        alert('Texto copiado al portapapeles:' + resultText.value);
        
    });    
   

// Funcion para encriptar y validar que sean minusculas
    function encrypt(text) {
        if (/[^a-z ' ']/.test(text)) {
            alert("Solo se permiten letras minúsculas.");
            return "";
        }
// Base para cambio de vocales
        return text.replace(/e/, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat')
                   .replace(/a/g, 'ai');
    }
// Funcion para desencriptar
    function decrypt(text) {
        return text.replace(/ai/g, 'a')
                   .replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }
});


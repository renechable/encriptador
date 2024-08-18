// Obtener referencias a los elementos del DOM
const inputText = document.getElementById('input-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const outputText = document.getElementById('output-text');

// Función para encriptar el texto
function encrypt(text) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'e':
        encryptedText += 'enter';
        break;
      case 'i':
        encryptedText += 'imes';
        break;
      case 'a':
        encryptedText += 'ai';
        break;
      case 'o':
        encryptedText += 'ober';
        break;
      case 'u':
        encryptedText += 'ufat';
        break;
      default:
        encryptedText += text[i];
    }
  }
  return encryptedText;
}

// Función para desencriptar el texto
function decrypt(text) {
  let decryptedText = text.replace(/enter/g, 'e');
  decryptedText = decryptedText.replace(/imes/g, 'i');
  decryptedText = decryptedText.replace(/ai/g, 'a');
  decryptedText = decryptedText.replace(/ober/g, 'o');
  decryptedText = decryptedText.replace(/ufat/g, 'u');
  return decryptedText;
}

// Evento de clic para el botón de encriptación
encryptBtn.addEventListener('click', () => {
  const inputTextValue = inputText.value.toLowerCase();
  const encryptedText = encrypt(inputTextValue);
  outputText.value = encryptedText;
});

// Evento de clic para el botón de desencriptación
decryptBtn.addEventListener('click', () => {
  const inputTextValue = inputText.value.toLowerCase();
  const decryptedText = decrypt(inputTextValue);
  outputText.value = decryptedText;
});
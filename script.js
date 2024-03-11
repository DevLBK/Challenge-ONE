function updateOutput(resultado) {
  const output = document.getElementById('output');
  const outputImg = document.getElementById('output-img');
  const outputMessage = document.getElementById('output-message');

  if (output) {
    output.innerHTML = `
      <div class="output-content">${resultado}</div>
      <button onclick="copiarTexto()" id="btn-copiar" class="btn-copiar">Copiar</button>`;
    if (resultado.trim().length > 0) {
      if (outputImg) outputImg.style.display = 'none';
      if (outputMessage) outputMessage.style.display = 'none';
      mostrarBotaoCopiar();
    } else {
      if (outputImg) outputImg.style.display = 'block';
      if (outputMessage) outputMessage.style.display = 'block';
      ocultarBotaoCopiar();
    }
  } else {
    console.error("Elemento 'output' não encontrado.");
  }
}



function mostrarBotaoCopiar() {
  const btnCopiar = document.getElementById('btn-copiar');
  if (btnCopiar) btnCopiar.style.display = 'block';
}

function ocultarBotaoCopiar() {
  const btnCopiar = document.getElementById('btn-copiar');
  if (btnCopiar) btnCopiar.style.display = 'none';
}

function checkLowerCase() {
  const textArea = document.getElementById('input-texto');
  const text = textArea.value.trim();

  const regex = /^[a-z\s]+$/;
  const lowerCase = regex.test(text);

  if (lowerCase) {
    const textoCriptografado = criptografar(text);
    updateOutput(textoCriptografado);
  } else {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
  }
}

function criptografar(texto) {
  return texto.replace(/e/g, 'enter')
              .replace(/i/g, 'imes')
              .replace(/a/g, 'ai')
              .replace(/o/g, 'ober')
              .replace(/u/g, 'ufat');
}

function descriptografar() {
  const texto = document.getElementById('input-texto').value.trim();
  const resultado = texto.replace(/enter/g, 'e')
                         .replace(/imes/g, 'i')
                         .replace(/ai/g, 'a')
                         .replace(/ober/g, 'o')
                         .replace(/ufat/g, 'u');
  updateOutput(resultado);
}

function copiarTexto() {
  const outputText = document.querySelector("#output .output-content").innerText;
  navigator.clipboard.writeText(outputText)
      .then(() => alert('Texto copiado com sucesso!'))
      .catch(err => console.error('Erro ao copiar texto: ', err));
}
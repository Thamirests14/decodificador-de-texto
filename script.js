var inputText = document.querySelector('#input-text');

//retira caractere especial//
inputText.addEventListener('paste', caractereEspecial);
inputText.addEventListener('keyup', funcaoEscrever);

function funcaoEscrever() {
  caractereEspecial('escrever');
}

function caractereEspecial(acao) {
  var regex = new RegExp('^[ 0-9a-zA-Z\b]+$');
  var self = inputText;

  setTimeout(function () {
    var text = self.value;

    if (!regex.test(text) && text != '') {
      if (acao == 'escrever') {
        self.value = text.slice(0, text.length - 1);
      } else {
        self.value = '';
      }
      alert('Não é permitido utilizar caractere especial!');
    }
  }, 10);
}

function criptografar(palavras) {
  palavras = palavras.value.toLowerCase();

  var novapalavra = '';
  var vogais = ['a', 'e', 'i', 'o', 'u'];

  for (var posicao = 0; posicao < palavras.length; posicao++) {
    if (palavras[posicao] == 'e') {
      novapalavra += 'enter';
    }
    if (palavras[posicao] == 'i') {
      novapalavra += 'imes';
    }
    if (palavras[posicao] == 'a') {
      novapalavra += 'ai';
    }
    if (palavras[posicao] == 'o') {
      novapalavra += 'ober';
    }
    if (palavras[posicao] == 'u') {
      novapalavra += 'ufat';
    }
    if (!vogais.includes(palavras[posicao])) {
      novapalavra += palavras[posicao];
    }
  }
  return novapalavra;
}

function botaoCriptografar() {
  var cript = criptografar(inputText);
  document.getElementById('input-result').value = cript;
}

function descriptografar(palavras) {
  palavras = palavras.value;
  var novapalavra = '';
  var vogais = ['a', 'e', 'i', 'o', 'u'];

  for (var posicao = 0; posicao < palavras.length; posicao++) {
    if (!vogais.includes(palavras[posicao])) {
      novapalavra += palavras[posicao];
    }
    if (palavras[posicao] == 'e') {
      novapalavra += 'e';
      posicao += 4;
    }
    if (palavras[posicao] == 'i') {
      novapalavra += 'i';
      posicao += 3;
    }
    if (palavras[posicao] == 'a') {
      novapalavra += 'a';
      posicao += 1;
    }
    if (palavras[posicao] == 'o') {
      novapalavra += 'o';
      posicao += 3;
    }
    if (palavras[posicao] == 'u') {
      novapalavra += 'u';
      posicao += 3;
    }
  }
  return novapalavra;
}

function botaoDescriptografar() {
  var descript = descriptografar(inputText);
  document.getElementById('input-result').value = descript;
}

function botaoCopiar() {
  document.querySelector('#input-result').select();
  document.execCommand('copy');
}

// Obtendo o botão do HTML pelo ID
const alertButton = document.getElementById('alertButton');
// Cria um novo elemento de imagem
const img = document.createElement("img");

// Define o caminho da imagem
img.src= "Gran_Turismo_2009_capa.png"

// Adicionando um evento de clique ao botão
alertButton.addEventListener('click', function() {
  alert('Você clicou no botão! Bem-vindo ao site!');
alert (document.body.appendChild(img))
});


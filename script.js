let inicioNamoro;
let botaoNaoFujao;
let fugindo = true;

window.onload = () => {
  botaoNaoFujao = document.querySelector('#buttons button:nth-child(2)');

  const fugir = () => {
    if (fugindo) {
      const x = Math.floor(Math.random() * 80);
      const y = Math.floor(Math.random() * 80);
      botaoNaoFujao.style.position = 'absolute';
      botaoNaoFujao.style.left = `${x}%`;
      botaoNaoFujao.style.top = `${y}%`;
    }
  };

  // Faz o botão fugir no desktop
  botaoNaoFujao.addEventListener('mouseover', fugir);

  // Faz o botão fugir no celular
  botaoNaoFujao.addEventListener('touchstart', fugir);
};

function responder(escolha) {
  const resposta = document.getElementById("resposta");
  const contador = document.getElementById("contador");
  document.getElementById("buttons").style.display = "none";

  if (!escolha) {
    fugindo = false; // botão para de fugir
    resposta.textContent = "Ah... tudo bem, vou continuar tentando te conquistar!";
    return;
  }

  resposta.textContent = "Agora somos oficialmente namorados, Millene!";
  inicioNamoro = new Date();
  atualizarContador();
  setInterval(atualizarContador, 1000);
}

function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicioNamoro;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").textContent =
    `Estamos juntos há: ${dias} dias, ${horas}h ${minutos}min ${segundos}s.`;
}

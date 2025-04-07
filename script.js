let inicioNamoro;

function responder(escolha) {
  const resposta = document.getElementById("resposta");
  const contador = document.getElementById("contador");
  document.getElementById("buttons").style.display = "none";

  if (escolha) {
    resposta.textContent = "Agora somos oficialmente namorados!";
    inicioNamoro = new Date();
    atualizarContador();
    setInterval(atualizarContador, 1000);
  } else {
    resposta.textContent = "Ah... tudo bem, vou continuar tentando te conquistar!";
  }
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

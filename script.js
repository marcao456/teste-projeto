function mostrarJogador(jogador) {

  const resultado = document.getElementById("resultado");

  if (jogador === "Michael Jordan") {
      resultado.textContent =
          "Michael Jordan é considerado um dos maiores jogadores da história do basquete e conquistou seis títulos da NBA com os Bulls.";
  }

  if (jogador === "Scottie Pippen") {
      resultado.textContent =
          "Scottie Pippen foi uma das principais estrelas dos Bulls e teve papel fundamental nas seis conquistas da equipe.";
  }

  if (jogador === "Dennis Rodman") {
      resultado.textContent =
          "Dennis Rodman ficou conhecido principalmente por sua defesa e capacidade de pegar rebotes, sendo importante nos títulos dos Bulls.";
  }
}

function registrarFa() {

  const mensagem = document.getElementById("mensagem");
  const botao = document.getElementById("botao-fas");

  mensagem.textContent =
      "🔥 Bem-vindo à torcida do Chicago Bulls!";

  botao.textContent = "Você já confirmou!";
  botao.disabled = true;
}
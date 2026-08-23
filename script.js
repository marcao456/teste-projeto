document.addEventListener("DOMContentLoaded", () => {

  // Se a imagem ainda não foi adicionada na pasta /images,
  // mostra uma caixa avisando o caminho/arquivo esperado
  // em vez do ícone de imagem quebrada.
  document.querySelectorAll(".post-image img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        const nomeArquivo = img.getAttribute("src").split("/").pop();
        const placeholder = document.createElement("div");
        placeholder.className = "image-placeholder";
        placeholder.textContent = `Coloque a imagem em: images/${nomeArquivo}`;
        img.replaceWith(placeholder);
      },
      { once: true }
    );
  });

  // Botão de curtir de cada post
  document.querySelectorAll(".like-btn").forEach((botao) => {
    botao.addEventListener("click", () => {
      const contador = botao.querySelector(".like-count");
      contador.textContent = Number(contador.textContent) + 1;
    });
  });

});
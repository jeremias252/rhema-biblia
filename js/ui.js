document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".sidebar nav button");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const nome = botao.textContent.trim();

            alert("Você abriu: " + nome);

        });

    });

});
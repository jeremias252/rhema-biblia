document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".sidebar nav button");
    const dashboard = document.querySelector(".dashboard");
    const pagina = document.getElementById("pagina");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const nome = botao.textContent.trim();

            switch (nome) {

                case "🏠 Dashboard":

                    pagina.style.display = "none";
                    dashboard.style.display = "flex";

                    break;

                case "📚 Biblioteca":

                    dashboard.style.display = "none";
                    pagina.style.display = "block";

                    abrirBiblioteca();

                    break;

                default:

                    dashboard.style.display = "none";
                    pagina.style.display = "block";

                    pagina.innerHTML = `
                        <h2>${nome}</h2>

                        <p>
                            Esta tela será construída nas próximas etapas.
                        </p>
                    `;

                    break;

            }

        });

    });

});
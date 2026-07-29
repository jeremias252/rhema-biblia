document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".sidebar nav button");
    const dashboard = document.querySelector(".dashboard");
    const pagina = document.getElementById("pagina");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const nome = botao.textContent.trim();

            dashboard.style.display = "none";
            pagina.style.display = "block";

            switch(nome){

                case "📚 Biblioteca":

                    pagina.innerHTML = `
                        <h2>📚 Biblioteca Bíblica</h2>

                        <p>
                            Aqui ficarão os livros teológicos, comentários,
                            dicionários e materiais de estudo.
                        </p>
                    `;

                break;

                default:

                    pagina.innerHTML = `
                        <h2>${nome}</h2>

                        <p>
                            Esta tela será construída nas próximas etapas.
                        </p>
                    `;

            }

        });

    });

});
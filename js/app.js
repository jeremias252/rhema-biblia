document.addEventListener("DOMContentLoaded", () => {

    const dashboard = document.querySelector(".dashboard");
    const pagina = document.getElementById("pagina");

    const botoes = document.querySelectorAll(".sidebar nav button");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const nome = botao.textContent.trim();

            dashboard.style.display = "none";
            pagina.style.display = "block";

            switch (nome) {

                case "🏠 Dashboard":

                    dashboard.style.display = "flex";
                    pagina.style.display = "none";

                    break;

                case "📚 Biblioteca":

                    abrirBiblioteca();

                    break;

                case "🤖 Bethesda AI":

                    pagina.innerHTML = `
                        <h1>🤖 Bethesda AI</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

                case "📖 Estudos":

                    pagina.innerHTML = `
                        <h1>📖 Estudos</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

                case "👤 Personagens":

                    pagina.innerHTML = `
                        <h1>👤 Personagens</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

                case "🗺️ Mapas":

                    pagina.innerHTML = `
                        <h1>🗺️ Mapas</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

                case "📜 Strong":

                    pagina.innerHTML = `
                        <h1>📜 Strong</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

                case "⭐ Favoritos":

                    pagina.innerHTML = `
                        <h1>⭐ Favoritos</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

                case "📝 Anotações":

                    pagina.innerHTML = `
                        <h1>📝 Anotações</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

                case "⚙️ Configurações":

                    pagina.innerHTML = `
                        <h1>⚙️ Configurações</h1>
                        <p>Em desenvolvimento...</p>
                    `;

                    break;

            }

        });

    });

    const campoPesquisa = document.getElementById("campoPesquisa");

    if (campoPesquisa) {

        campoPesquisa.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {

                pesquisarBiblia(campoPesquisa.value);

            }

        });

    }

});
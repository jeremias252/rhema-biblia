document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".sidebar nav button");

    const dashboard = document.querySelector(".dashboard");

    const pagina = document.getElementById("pagina");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const nome = botao.textContent.trim();

            dashboard.style.display = "none";

            pagina.style.display = "block";

            switch (nome) {

                case "🏠 Dashboard":

                    pagina.style.display = "none";

                    dashboard.style.display = "flex";

                    break;

                case "📚 Biblioteca":

                    abrirBiblioteca();

                    break;

                case "⭐ Favoritos":

                    abrirFavoritos();

                    break;

                case "🤖 Bethesda AI":

                    pagina.innerHTML = `
                        <h1>🤖 Bethesda AI</h1>

                        <p>Em construção...</p>
                    `;

                    break;

                case "📖 Estudos":

                    pagina.innerHTML = `
                        <h1>📖 Estudos</h1>

                        <p>Em construção...</p>
                    `;

                    break;

                case "👤 Personagens":

                    pagina.innerHTML = `
                        <h1>👤 Personagens</h1>

                        <p>Em construção...</p>
                    `;

                    break;

                case "🗺️ Mapas":

                    pagina.innerHTML = `
                        <h1>🗺️ Mapas</h1>

                        <p>Em construção...</p>
                    `;

                    break;

                case "📜 Strong":

                    pagina.innerHTML = `
                        <h1>📜 Strong</h1>

                        <p>Em construção...</p>
                    `;

                    break;

                case "📝 Anotações":

                    pagina.innerHTML = `
                        <h1>📝 Anotações</h1>

                        <p>Em construção...</p>
                    `;

                    break;

                case "⚙️ Configurações":

                    pagina.innerHTML = `
                        <h1>⚙️ Configurações</h1>

                        <p>Em construção...</p>
                    `;

                    break;

            }

        });

    });

});
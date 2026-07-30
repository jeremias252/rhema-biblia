document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".sidebar nav button");
    const dashboard = document.querySelector(".dashboard");
    const pagina = document.getElementById("pagina");

    function mostrarDashboard() {

        pagina.style.display = "none";
        dashboard.style.display = "flex";

    }

    function mostrarPagina() {

        dashboard.style.display = "none";
        pagina.style.display = "block";

    }

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const nome = botao.textContent.trim();

            switch (nome) {

                case "🏠 Dashboard":

                    mostrarDashboard();

                    break;

                case "📚 Biblioteca":

                    mostrarPagina();
                    abrirBiblioteca();

                    break;

                case "⭐ Favoritos":

                    mostrarPagina();
                    abrirFavoritos();

                    break;

                case "🤖 Bethesda AI":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <h1>🤖 Bethesda AI</h1>

                        <p>
                            Em breve você poderá conversar com a Inteligência Artificial do Bethesda.
                        </p>
                    `;

                    break;

                case "📝 Anotações":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <h1>📝 Anotações</h1>

                        <p>
                            Aqui ficarão suas anotações.
                        </p>
                    `;

                    break;

                case "📖 Estudos":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <h1>📖 Estudos</h1>

                        <p>
                            Aqui serão criados seus estudos bíblicos.
                        </p>
                    `;

                    break;

                case "👤 Personagens":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <h1>👤 Personagens Bíblicos</h1>

                        <p>
                            Em breve você poderá estudar todos os personagens da Bíblia.
                        </p>
                    `;

                    break;

                case "🗺️ Mapas":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <h1>🗺️ Mapas Bíblicos</h1>

                        <p>
                            Em breve estarão disponíveis mapas interativos.
                        </p>
                    `;

                    break;

                case "📜 Strong":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <h1>📜 Dicionário Strong</h1>

                        <p>
                            Em breve você poderá consultar o Strong.
                        </p>
                    `;

                    break;

                case "⚙️ Configurações":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <h1>⚙️ Configurações</h1>

                        <p>
                            Configurações do aplicativo.
                        </p>
                    `;

                    break;

                default:

                    mostrarPagina();

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
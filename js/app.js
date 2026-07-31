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

                    dashboard.style.display = "flex";
                    pagina.style.display = "none";

                    break;

                case "📚 Biblioteca":

                    abrirBiblioteca();

                    break;

                case "⭐ Favoritos":

                    abrirFavoritos();

                    break;

                case "📝 Anotações":

                    abrirAnotacoes();

                    break;

                case "🤖 Bethesda AI":

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <h1>🤖 Bethesda AI</h1>

                            <p>Em breve você poderá conversar com a IA bíblica.</p>

                        </div>
                    `;

                    break;

                case "📖 Estudos":

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <h1>📖 Estudos</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "👤 Personagens":

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <h1>👤 Personagens Bíblicos</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "🗺️ Mapas":

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <h1>🗺️ Mapas Bíblicos</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "📜 Strong":

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <h1>📜 Dicionário Strong</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "⚙️ Configurações":

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <h1>⚙️ Configurações</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

            }

        });

    });

});
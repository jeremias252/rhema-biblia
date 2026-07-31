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

                case "📜 Strong":

                    pagina.innerHTML = `

                        <div class="biblioteca">

                            <h1>📜 Dicionário Bíblico</h1>

                            <p>Digite um termo para pesquisar.</p>

                            <input
                                id="campoStrong"
                                type="text"
                                placeholder="Ex.: fé"
                                style="
                                    width:100%;
                                    padding:15px;
                                    border:none;
                                    border-radius:12px;
                                    margin:20px 0;
                                    box-shadow:0 5px 15px rgba(0,0,0,.08);
                                ">

                            <button
                                class="btn-voltar"
                                onclick="abrirDicionario(document.getElementById('campoStrong').value)">

                                Pesquisar

                            </button>

                        </div>

                    `;

                    break;

                case "🤖 Bethesda AI":

                    pagina.innerHTML = `

                        <div class="biblioteca">

                            <h1>🤖 Bethesda AI</h1>

                            <p>Em desenvolvimento.</p>

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

                            <h1>👤 Personagens</h1>

                            <p>Em desenvolvimento.</p>

                        </div>

                    `;

                    break;

                case "🗺️ Mapas":

                    pagina.innerHTML = `

                        <div class="biblioteca">

                            <h1>🗺️ Mapas</h1>

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
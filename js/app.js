document.addEventListener("DOMContentLoaded", () => {

    const dashboard = document.querySelector(".dashboard");
    const pagina = document.getElementById("pagina");

    function mostrarDashboard() {
        dashboard.style.display = "flex";
        pagina.style.display = "none";
    }

    function mostrarPagina() {
        dashboard.style.display = "none";
        pagina.style.display = "block";
    }

    document.querySelectorAll(".sidebar nav button").forEach(botao => {

        botao.addEventListener("click", () => {

            const texto = botao.textContent.trim();

            switch (texto) {

                case "🏠 Dashboard":
                    mostrarDashboard();
                    break;

                case "📚 Biblioteca":
                    mostrarPagina();
                    abrirBiblioteca();
                    break;

                case "👤 Personagens":
                    mostrarPagina();
                    abrirPersonagens();
                    break;

                case "📖 Estudos":
                    alert("Clique em Estudos funcionando!");
                    mostrarPagina();
                    abrirTimeline();
                    break;

                case "🤖 Bethesda AI":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <button
                                class="btn-voltar"
                                onclick="
                                    document.querySelector('.dashboard').style.display='flex';
                                    document.getElementById('pagina').style.display='none';
                                ">
                                ⬅ Dashboard
                            </button>

                            <h1>🤖 Bethesda AI</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "🗺️ Mapas":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <button
                                class="btn-voltar"
                                onclick="
                                    document.querySelector('.dashboard').style.display='flex';
                                    document.getElementById('pagina').style.display='none';
                                ">
                                ⬅ Dashboard
                            </button>

                            <h1>🗺️ Mapas Bíblicos</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "📜 Strong":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <button
                                class="btn-voltar"
                                onclick="
                                    document.querySelector('.dashboard').style.display='flex';
                                    document.getElementById('pagina').style.display='none';
                                ">
                                ⬅ Dashboard
                            </button>

                            <h1>📜 Strong</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "⭐ Favoritos":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <button
                                class="btn-voltar"
                                onclick="
                                    document.querySelector('.dashboard').style.display='flex';
                                    document.getElementById('pagina').style.display='none';
                                ">
                                ⬅ Dashboard
                            </button>

                            <h1>⭐ Favoritos</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "📝 Anotações":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <button
                                class="btn-voltar"
                                onclick="
                                    document.querySelector('.dashboard').style.display='flex';
                                    document.getElementById('pagina').style.display='none';
                                ">
                                ⬅ Dashboard
                            </button>

                            <h1>📝 Anotações</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                case "⚙️ Configurações":

                    mostrarPagina();

                    pagina.innerHTML = `
                        <div class="biblioteca">

                            <button
                                class="btn-voltar"
                                onclick="
                                    document.querySelector('.dashboard').style.display='flex';
                                    document.getElementById('pagina').style.display='none';
                                ">
                                ⬅ Dashboard
                            </button>

                            <h1>⚙️ Configurações</h1>

                            <p>Em desenvolvimento.</p>

                        </div>
                    `;

                    break;

                default:
                    mostrarDashboard();

            }

        });

    });

});
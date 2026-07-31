async function abrirTimeline() {

    const dashboard = document.querySelector(".dashboard");
    const pagina = document.getElementById("pagina");

    dashboard.style.display = "none";
    pagina.style.display = "block";

    pagina.innerHTML = `
        <div class="biblioteca">
            <h1>📅 Linha do Tempo Bíblica</h1>
            <p>Carregando...</p>
        </div>
    `;

    try {

        const resposta = await fetch("./data/timeline/timeline.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar timeline.json");
        }

        const eventos = await resposta.json();

        let html = `
            <div class="biblioteca">

                <button class="btn-voltar" onclick="
                    document.querySelector('.dashboard').style.display='flex';
                    document.getElementById('pagina').style.display='none';
                ">
                    ⬅ Dashboard
                </button>

                <h1>📅 Linha do Tempo Bíblica</h1>

                <p>Navegue pelos principais acontecimentos da Bíblia.</p>

                <div class="timeline">
        `;

        eventos.forEach(evento => {

            html += `
                <div class="timeline-card">

                    <h2>${evento.titulo}</h2>

                    <small>${evento.epoca}</small>

                    <p>${evento.descricao}</p>

                    <strong>Personagens</strong>

                    <ul>
            `;

            evento.personagens.forEach(personagem => {

                html += `<li>${personagem}</li>`;

            });

            html += `
                    </ul>

                </div>
            `;

        });

        html += `
                </div>
            </div>
        `;

        pagina.innerHTML = html;

    } catch (erro) {

        console.error(erro);

        pagina.innerHTML = `
            <div class="biblioteca">

                <button class="btn-voltar" onclick="
                    document.querySelector('.dashboard').style.display='flex';
                    document.getElementById('pagina').style.display='none';
                ">
                    ⬅ Dashboard
                </button>

                <h1>Erro</h1>

                <p>${erro.message}</p>

            </div>
        `;

    }

}
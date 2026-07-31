async function abrirTimeline() {

    const pagina = document.getElementById("pagina");

    document.querySelector(".dashboard").style.display = "none";
    pagina.style.display = "block";

    try {

        const resposta = await fetch("data/timeline/timeline.json");

        const eventos = await resposta.json();

        let html = `

        <div class="biblioteca">

            <button
                class="btn-voltar"
                onclick="
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

            evento.personagens.forEach(nome => {

                html += `<li>${nome}</li>`;

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

                <h1>Erro</h1>

                <p>Não foi possível carregar a linha do tempo.</p>

            </div>

        `;

    }

}
let personagens = [];

async function carregarPersonagens() {

    if (personagens.length > 0) {

        return personagens;

    }

    try {

        const resposta = await fetch("data/personagens/personagens.json");

        personagens = await resposta.json();

        return personagens;

    } catch (erro) {

        console.error("Erro ao carregar personagens:", erro);

        return [];

    }

}

async function abrirPersonagens() {

    const pagina = document.getElementById("pagina");

    const lista = await carregarPersonagens();

    let html = `

        <div class="biblioteca">

            <h1>👤 Personagens Bíblicos</h1>

            <p>Escolha um personagem para estudar.</p>

            <div class="lista-livros">

    `;

    lista.forEach(personagem => {

        html += `

            <div
                class="livro"
                onclick="abrirPersonagem(${personagem.id})">

                <h3>${personagem.nome}</h3>

                <small>${personagem.titulo}</small>

            </div>

        `;

    });

    html += `

            </div>

        </div>

    `;

    pagina.innerHTML = html;

}

async function abrirPersonagem(id) {

    const pagina = document.getElementById("pagina");

    const lista = await carregarPersonagens();

    const p = lista.find(x => x.id === id);

    if (!p) {

        alert("Personagem não encontrado.");

        return;

    }

    let html = `

        <div class="capitulo">

            <button
                class="btn-voltar"
                onclick="abrirPersonagens()">

                ⬅ Voltar

            </button>

            <h1>${p.nome}</h1>

            <h2>${p.titulo}</h2>

            <div class="card">

                <p><strong>Nascimento:</strong> ${p.nascimento}</p>

                <p><strong>Época:</strong> ${p.epoca}</p>

                <p><strong>Idade:</strong> ${p.idade}</p>

                <p><strong>Versículo-chave:</strong> ${p.versiculo}</p>

            </div>

            <div class="card" style="margin-top:20px;">

                <h3>📖 Biografia</h3>

                <p>${p.descricao}</p>

            </div>

            <div class="card" style="margin-top:20px;">

                <h3>👨‍👩‍👦 Família</h3>

                <pre>${JSON.stringify(p.familia, null, 2)}</pre>

            </div>

            <div class="card" style="margin-top:20px;">

                <h3>⭐ Principais Eventos</h3>

                <ul>

                    ${p.principaisEventos.map(e => `<li>${e}</li>`).join("")}

                </ul>

            </div>

        </div>

    `;

    pagina.innerHTML = html;

}
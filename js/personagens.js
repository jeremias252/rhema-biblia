let personagens = [];

async function carregarPersonagens() {

    if (personagens.length > 0) return personagens;

    try {

        const resposta = await fetch("data/personagens/personagens.json");

        personagens = await resposta.json();

        return personagens;

    } catch (erro) {

        console.error(erro);

        return [];

    }

}

function procurarPersonagem(nome) {

    return personagens.find(p => p.nome === nome);

}

function criarLinkPersonagem(nome) {

    const personagem = procurarPersonagem(nome);

    if (!personagem) return nome;

    return `
        <a href="#"
           onclick="abrirPersonagem(${personagem.id});return false;"
           style="color:#B58150;font-weight:bold;text-decoration:none;">
           ${nome}
        </a>
    `;

}

async function abrirPersonagens() {

    const pagina = document.getElementById("pagina");

    await carregarPersonagens();

    desenharListaPersonagens(personagens);

}

function desenharListaPersonagens(lista) {

    const pagina = document.getElementById("pagina");

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

        <h1>👤 Personagens Bíblicos</h1>

        <p>Pesquise ou escolha um personagem.</p>

        <input
            id="pesquisaPersonagem"
            type="text"
            placeholder="Pesquisar personagem..."
            style="
                width:100%;
                padding:15px;
                border-radius:12px;
                border:1px solid #ddd;
                margin:25px 0;
            "
        >

        <div class="lista-livros" id="listaPersonagens">

    `;

    lista.forEach(p => {

        html += `

            <div class="livro"
                 onclick="abrirPersonagem(${p.id})">

                <h3>${p.nome}</h3>

                <small>${p.titulo}</small>

            </div>

        `;

    });

    html += `

        </div>

    </div>

    `;

    pagina.innerHTML = html;

    document.getElementById("pesquisaPersonagem").addEventListener("input", pesquisarPersonagens);

}

function pesquisarPersonagens() {

    const texto = document
        .getElementById("pesquisaPersonagem")
        .value
        .toLowerCase();

    const filtrados = personagens.filter(p =>

        p.nome.toLowerCase().includes(texto) ||

        p.titulo.toLowerCase().includes(texto)

    );

    const lista = document.getElementById("listaPersonagens");

    let html = "";

    filtrados.forEach(p => {

        html += `

            <div class="livro"
                 onclick="abrirPersonagem(${p.id})">

                <h3>${p.nome}</h3>

                <small>${p.titulo}</small>

            </div>

        `;

    });

    lista.innerHTML = html;

}

async function abrirPersonagem(id) {

    const pagina = document.getElementById("pagina");

    await carregarPersonagens();

    const p = personagens.find(x => x.id === id);

    if (!p) {

        alert("Personagem não encontrado.");

        return;

    }

    let html = `

    <div class="capitulo">

        <button class="btn-voltar"
                onclick="abrirPersonagens()">

            ⬅ Voltar

        </button>

        <h1>${p.nome}</h1>

        <h2>${p.titulo}</h2>

        <div class="card">

            <h3>📌 Informações Gerais</h3>

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

            <h3>🌳 Genealogia</h3>

    `;

    if (p.pai)
        html += `<p><strong>Pai:</strong> ${criarLinkPersonagem(p.pai)}</p>`;

    if (p.mae)
        html += `<p><strong>Mãe:</strong> ${criarLinkPersonagem(p.mae)}</p>`;

    if (p.esposa?.length)
        html += `<p><strong>Cônjuge:</strong> ${p.esposa.map(criarLinkPersonagem).join(", ")}</p>`;

    if (p.filhos?.length)
        html += `<p><strong>Filhos:</strong> ${p.filhos.map(criarLinkPersonagem).join(", ")}</p>`;

    html += `

        </div>

        <div class="card" style="margin-top:20px;">

            <h3>⭐ Principais Eventos</h3>

            <ul>

    `;

    p.principaisEventos.forEach(evento => {

        html += `<li>${evento}</li>`;

    });

    html += `

            </ul>

        </div>

    </div>

    `;

    pagina.innerHTML = html;

}
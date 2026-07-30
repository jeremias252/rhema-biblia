async function abrirBiblioteca() {

    const pagina = document.getElementById("pagina");
    const livros = await carregarLivros();

    let html = `
        <div class="biblioteca">

            <h1>📚 Biblioteca Bíblica</h1>

            <p>Escolha um livro da Bíblia</p>

            <div class="lista-livros">
    `;

    livros.forEach(livro => {

        html += `
            <div class="livro" onclick="abrirLivro(${livro.id})">
                <h3>${livro.nome}</h3>
                <small>${livro.categoria}</small>
            </div>
        `;

    });

    html += `
            </div>

        </div>
    `;

    pagina.innerHTML = html;

}

async function abrirLivro(id) {

    const pagina = document.getElementById("pagina");

    const livros = await carregarLivros();
    const biblia = await carregarBiblia();

    const livroInfo = livros.find(l => l.id === id);
    const livroBiblia = biblia.find(l => l.abbrev === livroInfo.abrev);

    if (!livroInfo || !livroBiblia) {

        alert("Livro não encontrado.");
        return;

    }

    let html = `
        <div class="livro-detalhe">

            <button class="btn-voltar" onclick="abrirBiblioteca()">
                ⬅ Voltar
            </button>

            <h1>${livroInfo.nome}</h1>

            <div class="livro-info">

                <p><strong>Autor:</strong> ${livroInfo.autor}</p>

                <p><strong>Tema:</strong> ${livroInfo.tema || "-"}</p>

                <p><strong>Categoria:</strong> ${livroInfo.categoria}</p>

                <p><strong>Capítulos:</strong> ${livroBiblia.chapters.length}</p>

                <p><strong>Data:</strong> ${livroInfo.data || "-"}</p>

            </div>

            <h2>📖 Capítulos</h2>

            <div class="lista-capitulos">
    `;

    for (let i = 1; i <= livroBiblia.chapters.length; i++) {

        html += `
            <button
                class="capitulo-btn"
                onclick="abrirCapitulo('${livroInfo.abrev}', ${i})">
                ${i}
            </button>
        `;

    }

    html += `
            </div>

        </div>
    `;

    pagina.innerHTML = html;

}

async function abrirCapitulo(abrev, numeroCapitulo) {

    const pagina = document.getElementById("pagina");

    const livros = await carregarLivros();
    const biblia = await carregarBiblia();

    const livroInfo = livros.find(l => l.abrev === abrev);
    const livroBiblia = biblia.find(l => l.abbrev === abrev);

    if (!livroInfo || !livroBiblia) {

        alert("Capítulo não encontrado.");
        return;

    }

    const capitulo = livroBiblia.chapters[numeroCapitulo - 1];

    let html = `
        <div class="capitulo">

            <button
                class="btn-voltar"
                onclick="abrirLivro(${livroInfo.id})">
                ⬅ Voltar
            </button>

            <h1>${livroInfo.nome}</h1>

            <h2>Capítulo ${numeroCapitulo}</h2>

            <hr style="margin:25px 0;">
    `;

    capitulo.forEach((versiculo, indice) => {

        html += `
            <p class="versiculo">

                <span class="numero-versiculo">
                    ${indice + 1}
                </span>

                ${versiculo}

            </p>
        `;

    });

    html += `
        </div>
    `;

    pagina.innerHTML = html;

}
async function abrirBiblioteca() {

    const pagina = document.getElementById("pagina");

    const livros = await carregarLivros();

    let html = `
        <h1>📚 Biblioteca Bíblica</h1>

        <div class="lista-livros">
    `;

    livros.forEach(livro => {

        html += `
            <button class="livro" onclick="abrirLivro(${livro.id})">
                ${livro.nome}
            </button>
        `;

    });

    html += `</div>`;

    pagina.innerHTML = html;

}

async function abrirLivro(id) {

    const livros = await carregarLivros();

    const biblia = await carregarBiblia();

    const livroInfo = livros.find(l => l.id === id);

    const livroBiblia = biblia.find(l => l.abbrev === livroInfo.abrev);

    if (!livroInfo || !livroBiblia) {

        alert("Livro não encontrado.");

        return;

    }

    let html = `
        <button onclick="abrirBiblioteca()">⬅ Voltar</button>

        <h1>${livroInfo.nome}</h1>

        <p><strong>Autor:</strong> ${livroInfo.autor}</p>

        <p><strong>Categoria:</strong> ${livroInfo.categoria}</p>

        <p><strong>Tema:</strong> ${livroInfo.tema || "-"}</p>

        <p><strong>Capítulos:</strong> ${livroBiblia.chapters.length}</p>

        <hr>

        <h2>Capítulos</h2>

        <div class="lista-capitulos">
    `;

    for (let i = 1; i <= livroBiblia.chapters.length; i++) {

        html += `
            <button class="capitulo-btn" onclick="abrirCapitulo('${livroInfo.abrev}', ${i})">
                ${i}
            </button>
        `;

    }

    html += `</div>`;

    document.getElementById("pagina").innerHTML = html;

}

async function abrirCapitulo(abrev, numeroCapitulo) {

    const livros = await carregarLivros();

    const biblia = await carregarBiblia();

    const livroInfo = livros.find(l => l.abrev === abrev);

    const livroBiblia = biblia.find(l => l.abbrev === abrev);

    const capitulo = livroBiblia.chapters[numeroCapitulo - 1];

    let html = `
        <button onclick="abrirLivro(${livroInfo.id})">⬅ Voltar</button>

        <h1>${livroInfo.nome}</h1>

        <h2>Capítulo ${numeroCapitulo}</h2>

        <hr>
    `;

    capitulo.forEach((versiculo, indice) => {

        html += `
            <p>
                <strong>${indice + 1}</strong> ${versiculo}
            </p>
        `;

    });

    document.getElementById("pagina").innerHTML = html;

}
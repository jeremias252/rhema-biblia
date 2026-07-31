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

                <small>${livro.categoria || ""}</small>

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

    const livroInfo = livros.find(l => l.id === id);

    if (!livroInfo) {

        alert("Livro não encontrado.");

        return;

    }

    const livroBiblia = await carregarLivroBiblia(livroInfo.abrev);

    if (!livroBiblia) {

        alert("Não foi possível carregar este livro.");

        return;

    }

    let html = `
        <div class="livro-detalhe">

            <button
                class="btn-voltar"
                onclick="abrirBiblioteca()">
                ⬅ Voltar
            </button>

            <h1>${livroInfo.nome}</h1>

            <div class="livro-info">

                <p><strong>Autor:</strong> ${livroInfo.autor || "-"}</p>

                <p><strong>Tema:</strong> ${livroInfo.tema || "-"}</p>

                <p><strong>Categoria:</strong> ${livroInfo.categoria || "-"}</p>

                <p><strong>Capítulos:</strong> ${livroBiblia.chapters.length}</p>

                <p><strong>Data:</strong> ${livroInfo.data || "-"}</p>

            </div>

            <h2>📖 Capítulos</h2>

            <div class="lista-capitulos">
    `;

    livroBiblia.chapters.forEach((_, index) => {

        html += `
            <button
                class="capitulo-btn"
                onclick="abrirCapitulo('${livroInfo.abrev}', ${index + 1})">

                ${index + 1}

            </button>
        `;

    });

    html += `
            </div>

        </div>
    `;

    pagina.innerHTML = html;

}
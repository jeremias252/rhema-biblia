async function pesquisarBiblia(texto) {

    texto = texto.toLowerCase().trim();

    if (texto === "") {
        abrirBiblioteca();
        return;
    }

    const pagina = document.getElementById("pagina");

    const livros = await carregarLivros();
    const biblia = await carregarBiblia();

    let html = `
        <div class="biblioteca">

            <button class="btn-voltar" onclick="abrirBiblioteca()">
                ⬅ Voltar
            </button>

            <h1>🔍 Pesquisa</h1>

            <p>Resultados para <strong>"${texto}"</strong></p>

            <hr>

    `;

    let encontrados = 0;

    biblia.forEach(livro => {

        livro.chapters.forEach((capitulo, numeroCapitulo) => {

            capitulo.forEach((versiculo, numeroVersiculo) => {

                if (versiculo.toLowerCase().includes(texto)) {

                    encontrados++;

                    const info = livros.find(l => l.abrev === livro.abbrev);

                    html += `
                        <div class="card" style="margin-bottom:20px;">

                            <h3>
                                ${info.nome}
                                ${numeroCapitulo + 1}:${numeroVersiculo + 1}
                            </h3>

                            <p>${versiculo}</p>

                        </div>
                    `;

                }

            });

        });

    });

    if (encontrados === 0) {

        html += `
            <p>Nenhum versículo encontrado.</p>
        `;

    }

    html += `</div>`;

    pagina.innerHTML = html;

}
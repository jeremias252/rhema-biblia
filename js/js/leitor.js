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

    const total = livroBiblia.chapters.length;
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

            <div style="display:flex;gap:10px;margin:25px 0;">

                ${
                    numeroCapitulo > 1
                    ? `<button class="btn-voltar"
                        onclick="abrirCapitulo('${abrev}', ${numeroCapitulo-1})">
                        ⬅ Capítulo Anterior
                       </button>`
                    : ""
                }

                ${
                    numeroCapitulo < total
                    ? `<button class="btn-voltar"
                        onclick="abrirCapitulo('${abrev}', ${numeroCapitulo+1})">
                        Próximo Capítulo ➡
                       </button>`
                    : ""
                }

            </div>

            <hr>

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

    html += `</div>`;

    pagina.innerHTML = html;

}
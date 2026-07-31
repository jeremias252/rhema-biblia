async function abrirCapitulo(abrev, numeroCapitulo) {

    const pagina = document.getElementById("pagina");

    const livros = await carregarLivros();

    const livroInfo = livros.find(l => l.abrev === abrev);

    if (!livroInfo) {

        alert("Livro não encontrado.");

        return;

    }

    const livroBiblia = await carregarLivroBiblia(abrev);

    if (!livroBiblia) {

        alert("Livro não encontrado.");

        return;

    }

    const capitulo = livroBiblia.chapters[numeroCapitulo - 1];

    if (!capitulo) {

        alert("Capítulo não encontrado.");

        return;

    }

    let html = `

        <div class="capitulo">

            <button
                class="btn-voltar"
                onclick="abrirLivro(${livroInfo.id})">

                ⬅ Voltar

            </button>

            <h1>${livroInfo.nome}</h1>

            <h2>Capítulo ${numeroCapitulo}</h2>

            <div style="display:flex;gap:10px;flex-wrap:wrap;margin:25px 0;">

    `;

    if (numeroCapitulo > 1) {

        html += `

            <button
                class="btn-voltar"
                onclick="abrirCapitulo('${abrev}', ${numeroCapitulo - 1})">

                ⬅ Capítulo Anterior

            </button>

        `;

    }

    if (numeroCapitulo < livroBiblia.chapters.length) {

        html += `

            <button
                class="btn-voltar"
                onclick="abrirCapitulo('${abrev}', ${numeroCapitulo + 1})">

                Próximo Capítulo ➡

            </button>

        `;

    }

    html += `

            </div>

            <hr style="margin-bottom:30px;">

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
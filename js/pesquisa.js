async function pesquisarBiblia(texto) {

    const pagina = document.getElementById("pagina");

    if (!texto.trim()) {

        alert("Digite algo para pesquisar.");

        return;

    }

    const biblia = await carregarBiblia();

    let resultados = [];

    biblia.forEach(livro => {

        livro.chapters.forEach((capitulo, indiceCapitulo) => {

            capitulo.forEach((versiculo, indiceVersiculo) => {

                if (versiculo.toLowerCase().includes(texto.toLowerCase())) {

                    resultados.push({

                        livro: livro.abbrev,

                        referencia: `${livro.name} ${indiceCapitulo + 1}:${indiceVersiculo + 1}`,

                        capitulo: indiceCapitulo + 1,

                        versiculo: indiceVersiculo + 1,

                        texto: versiculo

                    });

                }

            });

        });

    });

    let html = `

        <div class="biblioteca">

            <button
                class="btn-voltar"
                onclick="
                    document.querySelector('.dashboard').style.display='flex';
                    document.getElementById('pagina').style.display='none';
                ">

                ⬅ Voltar

            </button>

            <h1>🔍 Pesquisa Bíblica</h1>

            <p>

                Foram encontrados
                <strong>${resultados.length}</strong>
                resultado(s).

            </p>

    `;

    if (resultados.length === 0) {

        html += `

            <div class="card">

                <p>Nenhum versículo encontrado.</p>

            </div>

        `;

    } else {

        resultados.forEach(item => {

            html += `

                <div
                    class="card"
                    style="margin-bottom:20px;cursor:pointer;"
                    onclick="abrirCapitulo('${item.livro}', ${item.capitulo})">

                    <h3>${item.referencia}</h3>

                    <p>${item.texto}</p>

                </div>

            `;

        });

    }

    html += `

        </div>

    `;

    pagina.innerHTML = html;

}
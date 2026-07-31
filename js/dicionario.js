let dicionario = {};

async function carregarDicionario() {

    if (Object.keys(dicionario).length > 0) {

        return dicionario;

    }

    try {

        const resposta = await fetch("data/dicionario/dicionario.json");

        dicionario = await resposta.json();

        return dicionario;

    } catch (erro) {

        console.error(erro);

        return {};

    }

}

async function pesquisarDicionario(termo) {

    const dados = await carregarDicionario();

    termo = termo.toLowerCase().trim();

    let resultados = [];

    for (const chave in dados) {

        if (

            chave.includes(termo) ||

            dados[chave].titulo.toLowerCase().includes(termo) ||

            dados[chave].descricao.toLowerCase().includes(termo)

        ) {

            resultados.push(dados[chave]);

        }

    }

    return resultados;

}

async function abrirDicionario(termo) {

    const pagina = document.getElementById("pagina");

    const resultados = await pesquisarDicionario(termo);

    let html = `

    <div class="biblioteca">

        <button
            class="btn-voltar"
            onclick="history.back()">

            ⬅ Voltar

        </button>

        <h1>📜 Dicionário Bíblico</h1>

    `;

    if (resultados.length === 0) {

        html += `

            <div class="card">

                <p>Nenhum termo encontrado.</p>

            </div>

        `;

    } else {

        resultados.forEach(item => {

            html += `

            <div class="card" style="margin-bottom:25px;">

                <h2>${item.titulo}</h2>

                <p>${item.descricao}</p>

                <h3>📖 Referências Bíblicas</h3>

                <ul>

            `;

            item.referencias.forEach(ref => {

                html += `

                    <li>

                        <a
                            href="#"
                            onclick="abrirReferencia('${ref}');return false;">

                            ${ref}

                        </a>

                    </li>

                `;

            });

            html += `

                </ul>

            </div>

            `;

        });

    }

    html += `

    </div>

    `;

    pagina.innerHTML = html;

}

async function abrirReferencia(referencia) {

    const livros = await carregarLivros();

    const partes = referencia.split(" ");

    const livroNome = partes.slice(0, partes.length - 1).join(" ");

    const capVers = partes[partes.length - 1];

    const capitulo = parseInt(capVers.split(":")[0]);

    const versiculo = parseInt(capVers.split(":")[1]);

    const livro = livros.find(l => l.nome === livroNome);

    if (!livro) {

        alert("Livro não encontrado.");

        return;

    }

    abrirCapitulo(

        livro.abrev,

        capitulo,

        versiculo

    );

}
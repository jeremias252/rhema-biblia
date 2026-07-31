let favoritos = JSON.parse(localStorage.getItem("favoritosBethesda")) || [];

function adicionarFavorito(referencia, texto) {

    favoritos = JSON.parse(localStorage.getItem("favoritosBethesda")) || [];

    const existe = favoritos.find(v => v.referencia === referencia);

    if (existe) {

        alert("Este versículo já está nos favoritos.");

        return;

    }

    const partes = referencia.split(" ");

    const livro = partes.slice(0, partes.length - 1).join(" ");

    const capVers = partes[partes.length - 1];

    const capitulo = parseInt(capVers.split(":")[0]);

    const versiculo = parseInt(capVers.split(":")[1]);

    favoritos.push({

        referencia,

        texto,

        livro,

        capitulo,

        versiculo

    });

    localStorage.setItem(

        "favoritosBethesda",

        JSON.stringify(favoritos)

    );

    alert("Versículo salvo!");

}

async function abrirFavoritos() {

    const pagina = document.getElementById("pagina");

    favoritos = JSON.parse(localStorage.getItem("favoritosBethesda")) || [];

    const livros = await carregarLivros();

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

            <h1>⭐ Favoritos</h1>

    `;

    if (favoritos.length === 0) {

        html += `

            <div class="card">

                <p>Nenhum favorito salvo.</p>

            </div>

        `;

    } else {

        favoritos.forEach((item, indice) => {

            const livro = livros.find(l => l.nome === item.livro);

            html += `

                <div
                    class="card"
                    style="margin-bottom:20px;cursor:pointer;"
                    onclick="abrirCapitulo('${livro.abrev}', ${item.capitulo}, ${item.versiculo})">

                    <h3>${item.referencia}</h3>

                    <p>${item.texto}</p>

                    <button

                        onclick="event.stopPropagation();removerFavorito(${indice})"

                        class="btn-voltar">

                        🗑 Remover

                    </button>

                </div>

            `;

        });

    }

    html += `

        </div>

    `;

    pagina.innerHTML = html;

}

function removerFavorito(indice) {

    favoritos.splice(indice, 1);

    localStorage.setItem(

        "favoritosBethesda",

        JSON.stringify(favoritos)

    );

    abrirFavoritos();

}
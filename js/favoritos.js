let favoritos = JSON.parse(localStorage.getItem("favoritosBethesda")) || [];

function adicionarFavorito(referencia, texto) {

    const existe = favoritos.find(v => v.referencia === referencia);

    if (existe) {

        alert("Este versículo já está nos favoritos.");

        return;

    }

    favoritos.push({

        referencia: referencia,

        texto: texto

    });

    localStorage.setItem(

        "favoritosBethesda",

        JSON.stringify(favoritos)

    );

    alert("Versículo salvo nos favoritos!");

}

function abrirFavoritos() {

    const pagina = document.getElementById("pagina");

    favoritos = JSON.parse(localStorage.getItem("favoritosBethesda")) || [];

    let html = `

        <div class="biblioteca">

            <h1>⭐ Favoritos</h1>

    `;

    if (favoritos.length === 0) {

        html += `

            <p>Você ainda não possui versículos favoritos.</p>

        `;

    } else {

        favoritos.forEach((item, indice) => {

            html += `

                <div class="card" style="margin-bottom:20px;">

                    <h3>${item.referencia}</h3>

                    <p>${item.texto}</p>

                    <button

                        onclick="removerFavorito(${indice})"

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
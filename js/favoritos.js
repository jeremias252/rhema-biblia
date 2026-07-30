function obterFavoritos() {

    const favoritos = localStorage.getItem("bethesdaFavoritos");

    if (!favoritos) {
        return [];
    }

    return JSON.parse(favoritos);

}

function salvarFavoritos(lista) {

    localStorage.setItem(
        "bethesdaFavoritos",
        JSON.stringify(lista)
    );

}

function favoritoExiste(referencia) {

    const favoritos = obterFavoritos();

    return favoritos.some(item => item.referencia === referencia);

}

function adicionarFavorito(referencia, texto) {

    const favoritos = obterFavoritos();

    if (favoritoExiste(referencia)) {

        alert("Este versículo já está nos favoritos.");

        return;

    }

    favoritos.push({

        referencia,
        texto,
        data: new Date().toLocaleDateString("pt-BR")

    });

    salvarFavoritos(favoritos);

    alert("Versículo adicionado aos favoritos.");

}

function abrirFavoritos() {

    const pagina = document.getElementById("pagina");

    const favoritos = obterFavoritos();

    let html = `

        <h1>⭐ Favoritos</h1>

    `;

    if (favoritos.length === 0) {

        html += `

            <p>Você ainda não possui favoritos.</p>

        `;

    } else {

        favoritos.forEach(item => {

            html += `

                <div class="card">

                    <h3>${item.referencia}</h3>

                    <p>${item.texto}</p>

                    <small>Salvo em ${item.data}</small>

                </div>

                <br>

            `;

        });

    }

    pagina.innerHTML = html;

}
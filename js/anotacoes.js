let anotacoes = JSON.parse(localStorage.getItem("anotacoesBethesda")) || [];

function adicionarAnotacao(referencia) {

    let texto = prompt("Digite sua anotação:");

    if (texto === null || texto.trim() === "") {

        return;

    }

    anotacoes = JSON.parse(localStorage.getItem("anotacoesBethesda")) || [];

    const existe = anotacoes.find(a => a.referencia === referencia);

    if (existe) {

        existe.texto = texto;

    } else {

        anotacoes.push({

            referencia,

            texto

        });

    }

    localStorage.setItem(

        "anotacoesBethesda",

        JSON.stringify(anotacoes)

    );

    alert("Anotação salva!");

}

function abrirAnotacoes() {

    const pagina = document.getElementById("pagina");

    anotacoes = JSON.parse(localStorage.getItem("anotacoesBethesda")) || [];

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

            <h1>📝 Anotações</h1>

    `;

    if (anotacoes.length === 0) {

        html += `

            <div class="card">

                <p>Nenhuma anotação encontrada.</p>

            </div>

        `;

    } else {

        anotacoes.forEach((item, indice) => {

            html += `

                <div class="card" style="margin-bottom:20px;">

                    <h3>${item.referencia}</h3>

                    <p>${item.texto}</p>

                    <button

                        onclick="removerAnotacao(${indice})"

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

function removerAnotacao(indice) {

    anotacoes.splice(indice, 1);

    localStorage.setItem(

        "anotacoesBethesda",

        JSON.stringify(anotacoes)

    );

    abrirAnotacoes();

}
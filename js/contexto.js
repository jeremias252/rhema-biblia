async function abrirContextoVersiculo(referencia, texto) {

    const pagina = document.getElementById("pagina");

    const comentario = await buscarComentario(referencia);

    let html = `

        <div class="capitulo">

            <button
                class="btn-voltar"
                onclick="history.back()">

                ⬅ Voltar

            </button>

            <h1>${referencia}</h1>

            <div class="card">

                <h3>📖 Versículo</h3>

                <p class="versiculo">

                    ${texto}

                </p>

            </div>

    `;

    if (comentario) {

        html += `

            <div class="card" style="margin-top:20px;">

                <h3>📚 Comentário Bíblico</h3>

                <p>

                    ${comentario.comentario}

                </p>

            </div>

            <div class="card" style="margin-top:20px;">

                <h3>💡 Aplicação</h3>

                <p>

                    ${comentario.aplicacao}

                </p>

            </div>

            <div class="card" style="margin-top:20px;">

                <h3>🔗 Referências Cruzadas</h3>

                <ul>

                    ${comentario.referencias.map(ref => `<li>${ref}</li>`).join("")}

                </ul>

            </div>

        `;

    } else {

        html += `

            <div class="card" style="margin-top:20px;">

                <h3>📚 Comentário Bíblico</h3>

                <p>

                    Ainda não existe comentário para este versículo.

                </p>

            </div>

        `;

    }

    html += `

        </div>

    `;

    pagina.innerHTML = html;

}
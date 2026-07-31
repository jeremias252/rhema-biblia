function abrirContextoVersiculo(referencia, texto) {

    const pagina = document.getElementById("pagina");

    pagina.innerHTML = `

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

            <div class="card" style="margin-top:20px;">

                <h3>💡 Aplicação</h3>

                <p>

                    Em breve o Bethesda AI mostrará aplicações práticas,
                    comentários bíblicos, contexto histórico e referências
                    cruzadas deste versículo.

                </p>

            </div>

        </div>

    `;

}
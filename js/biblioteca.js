async function abrirBiblioteca() {

    const pagina = document.getElementById("pagina");

    const livros = await carregarLivros();

    let html = `

        <div class="biblioteca">

            <h1>📚 Biblioteca Bíblica</h1>

            <p>Escolha um livro da Bíblia</p>

            <div class="lista-livros">

    `;

    livros.forEach(livro => {

        html += `

            <div class="livro" onclick="abrirLivro(${livro.id})">

                <h3>${livro.nome}</h3>

                <small>${livro.categoria}</small>

            </div>

        `;

    });

    html += `

            </div>

        </div>

    `;

    pagina.innerHTML = html;

}

async function abrirLivro(id){

    const livros = await carregarLivros();

    const livro = livros.find(l => l.id === id);

    if(!livro){

        alert("Livro não encontrado.");

        return;

    }

    const pagina = document.getElementById("pagina");

    pagina.innerHTML = `

        <button onclick="abrirBiblioteca()">

            ⬅ Voltar

        </button>

        <h1>${livro.nome}</h1>

        <hr>

        <p><strong>Autor:</strong> ${livro.autor}</p>

        <p><strong>Tema:</strong> ${livro.tema}</p>

        <p><strong>Categoria:</strong> ${livro.categoria}</p>

        <p><strong>Capítulos:</strong> ${livro.capitulos}</p>

        <p><strong>Data:</strong> ${livro.data}</p>

        <p><strong>Abreviação:</strong> ${livro.abrev}</p>
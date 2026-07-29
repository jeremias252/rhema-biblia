function abrirBiblioteca() {

    const pagina = document.getElementById("pagina");

    const antigoTestamento = [
        "Gênesis",
        "Êxodo",
        "Levítico",
        "Números",
        "Deuteronômio",
        "Josué",
        "Juízes",
        "Rute",
        "1 Samuel",
        "2 Samuel"
    ];

    let html = `
        <div class="biblioteca">

            <h1>📚 Biblioteca Bíblica</h1>

            <p>Selecione um livro da Bíblia para iniciar o estudo.</p>

            <input
                type="text"
                id="pesquisaLivro"
                placeholder="Pesquisar livro..."
            >

            <h2>Antigo Testamento</h2>

            <div class="lista-livros">
    `;

    antigoTestamento.forEach(livro => {

        html += `
            <div class="livro" onclick="abrirLivro('${livro}')">
                ${livro}
            </div>
        `;

    });

    html += `
            </div>

        </div>
    `;

    pagina.innerHTML = html;

}
function abrirLivro(nomeLivro){

    const pagina = document.getElementById("pagina");

    pagina.innerHTML = `
        <button onclick="abrirBiblioteca()">⬅ Voltar</button>

        <h1>${nomeLivro}</h1>

        <h3>Autor</h3>
        <p>Em breve...</p>

        <h3>Data</h3>
        <p>Em breve...</p>

        <h3>Tema</h3>
        <p>Em breve...</p>
    `;

}
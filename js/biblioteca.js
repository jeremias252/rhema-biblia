async function abrirLivro(id){

    const livros = await carregarLivros();

    alert(JSON.stringify(livros[0], null, 2));

}

    console.log(livro);

    const pagina = document.getElementById("pagina");

    pagina.innerHTML = `
        <button onclick="abrirBiblioteca()">⬅ Voltar</button>

        <h1>${livro.nome}</h1>

        <hr>

        <p><strong>Autor:</strong> ${livro.autor}</p>

        <p><strong>Tema:</strong> ${livro.tema}</p>

        <p><strong>Categoria:</strong> ${livro.categoria}</p>

        <p><strong>Capítulos:</strong> ${livro.capitulos}</p>

        <p><strong>Data:</strong> ${livro.data}</p>

        <p><strong>Abreviação:</strong> ${livro.abrev}</p>
    `;
}
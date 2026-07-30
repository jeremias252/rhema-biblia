let livrosBiblia = [];
let biblia = [];

async function carregarLivros() {

    if (livrosBiblia.length > 0) {
        return livrosBiblia;
    }

    const resposta = await fetch("data/livros.json");

    livrosBiblia = await resposta.json();

    return livrosBiblia;

}

async function carregarBiblia() {

    if (biblia.length > 0) {
        return biblia;
    }

    const resposta = await fetch("data/biblia.json");

    biblia = await resposta.json();

    return biblia;

}

async function obterLivro(abrev) {

    const biblia = await carregarBiblia();

    return biblia.find(livro => livro.abbrev === abrev);

}

async function obterCapitulo(abrev, numero) {

    const livro = await obterLivro(abrev);

    if (!livro) return null;

    return livro.chapters[numero - 1];

}

async function totalCapitulos(abrev) {

    const livro = await obterLivro(abrev);

    if (!livro) return 0;

    return livro.chapters.length;

}
let livrosBiblia = [];
let cacheBiblia = {};

async function carregarLivros() {

    if (livrosBiblia.length > 0) {
        return livrosBiblia;
    }

    const resposta = await fetch("data/livros.json");

    livrosBiblia = await resposta.json();

    return livrosBiblia;

}

async function carregarLivroBiblia(abrev) {

    if (cacheBiblia[abrev]) {
        return cacheBiblia[abrev];
    }

    const resposta = await fetch(`data/biblia/${abrev}.json`);

    const livro = await resposta.json();

    cacheBiblia[abrev] = livro;

    return livro;

}
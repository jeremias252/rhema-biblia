let livrosBiblia = [];
let biblia = [];

async function carregarLivros() {

    if (livrosBiblia.length > 0) {
        return livrosBiblia;
    }

    try {

        const resposta = await fetch("data/livros.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar livros.");
        }

        livrosBiblia = await resposta.json();

        return livrosBiblia;

    } catch (erro) {

        console.error(erro);

        alert("Não foi possível carregar os livros da Bíblia.");

        return [];

    }

}

async function carregarBiblia() {

    if (biblia.length > 0) {
        return biblia;
    }

    try {

        const resposta = await fetch("data/biblia.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar a Bíblia.");
        }

        biblia = await resposta.json();

        return biblia;

    } catch (erro) {

        console.error(erro);

        alert("Não foi possível carregar a Bíblia.");

        return [];

    }

}

async function carregarLivroBiblia(abrev) {

    const bibliaCompleta = await carregarBiblia();

    return bibliaCompleta.find(livro => livro.abbrev === abrev);

}
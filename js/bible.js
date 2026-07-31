let livrosBiblia = [];

let cacheBiblia = {};

async function carregarLivros() {

    if (livrosBiblia.length > 0) {
        return livrosBiblia;
    }

    try {

        const resposta = await fetch("data/livros.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar livros.json");
        }

        livrosBiblia = await resposta.json();

        return livrosBiblia;

    } catch (erro) {

        console.error(erro);

        alert("Erro ao carregar os livros da Bíblia.");

        return [];

    }

}

async function carregarLivroBiblia(abrev) {

    if (cacheBiblia[abrev]) {
        return cacheBiblia[abrev];
    }

    try {

        const resposta = await fetch(`data/biblia/${abrev}.json`);

        if (!resposta.ok) {
            throw new Error(`Livro ${abrev} não encontrado.`);
        }

        const livro = await resposta.json();

        cacheBiblia[abrev] = livro;

        return livro;

    } catch (erro) {

        console.error(erro);

        alert(`Erro ao carregar o livro ${abrev}.`);

        return null;

    }

}
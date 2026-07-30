let livrosBiblia = [];

async function carregarLivros() {

    if (livrosBiblia.length > 0) {
        return livrosBiblia;
    }

    const resposta = await fetch("data/livros.json");

    livrosBiblia = await resposta.json();

    return livrosBiblia;

}
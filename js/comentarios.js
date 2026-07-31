let comentarios = {};

async function carregarComentarios() {

    if (Object.keys(comentarios).length > 0) {

        return comentarios;

    }

    try {

        const resposta = await fetch("data/comentarios/comentarios.json");

        comentarios = await resposta.json();

        return comentarios;

    } catch (erro) {

        console.error("Erro ao carregar comentários:", erro);

        return {};

    }

}

async function buscarComentario(referencia) {

    const comentarios = await carregarComentarios();

    return comentarios[referencia] || null;

}
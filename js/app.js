const conteudo = document.querySelector(".conteudo");

function mostrarInicio() {
    conteudo.innerHTML = `
        <h1>Bem-vindo ao Bethesda</h1>
        <p>Escolha uma ferramenta no menu ao lado para começar seus estudos.</p>
    `;
}

function mostrarIA() {
    conteudo.innerHTML = `
        <h1>🤖 Bethesda AI</h1>

        <p>Faça qualquer pergunta sobre a Bíblia.</p>

        <div class="chat">
            <div id="mensagens"></div>

            <textarea id="pergunta" placeholder="Digite sua pergunta..."></textarea>

            <button id="enviar">
                Perguntar
            </button>
        </div>
    `;
}

function mostrarBiblioteca() {

    conteudo.innerHTML = `
        <h1>📚 Biblioteca Bíblica</h1>

        <p>Escolha um livro para estudar.</p>

        <div class="biblioteca"></div>
    `;

    const livros = [

        "Gênesis","Êxodo","Levítico","Números","Deuteronômio",

        "Josué","Juízes","Rute","1 Samuel","2 Samuel",

        "1 Reis","2 Reis","1 Crônicas","2 Crônicas",

        "Esdras","Neemias","Ester","Jó","Salmos",

        "Provérbios","Eclesiastes","Cânticos",

        "Isaías","Jeremias","Lamentações",

        "Ezequiel","Daniel","Oseias","Joel",

        "Amós","Obadias","Jonas","Miqueias",

        "Naum","Habacuque","Sofonias",

        "Ageu","Zacarias","Malaquias",

        "Mateus","Marcos","Lucas","João",

        "Atos","Romanos",

        "1 Coríntios","2 Coríntios",

        "Gálatas","Efésios","Filipenses",

        "Colossenses",

        "1 Tessalonicenses",

        "2 Tessalonicenses",

        "1 Timóteo",

        "2 Timóteo",

        "Tito",

        "Filemom",

        "Hebreus",

        "Tiago",

        "1 Pedro",

        "2 Pedro",

        "1 João",

        "2 João",

        "3 João",

        "Judas",

        "Apocalipse"

    ];

    const biblioteca = document.querySelector(".biblioteca");

    livros.forEach(livro => {

        const card = document.createElement("div");

        card.className = "livro";

        card.innerHTML = `
            📖
            <h3>${livro}</h3>
        `;

        card.onclick = () => {
            alert("Você clicou em " + livro);
        };

        biblioteca.appendChild(card);
    });
}

document.querySelectorAll(".sidebar button")[0].onclick = mostrarInicio;
document.querySelectorAll(".sidebar button")[1].onclick = mostrarIA;
document.querySelectorAll(".sidebar button")[2].onclick = mostrarBiblioteca;

mostrarInicio();
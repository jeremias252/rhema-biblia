const conteudo = document.querySelector(".conteudo");

function mostrarInicio(){

conteudo.innerHTML=`

<h1>Bem-vindo ao Bethesda</h1>

<p>

Escolha uma ferramenta no menu ao lado para começar seus estudos.

</p>

`;

}

function mostrarIA(){

conteudo.innerHTML=`

<h1>🤖 Bethesda AI</h1>

<p>

Faça qualquer pergunta sobre a Bíblia.

</p>

<div class="chat">

<div id="mensagens"></div>

<textarea id="pergunta" placeholder="Digite sua pergunta..."></textarea>

<button id="enviar">

Perguntar

</button>

</div>

`;

}

document.querySelectorAll(".sidebar button")[0].onclick=mostrarInicio;

document.querySelectorAll(".sidebar button")[1].onclick=mostrarIA;
document.addEventListener("DOMContentLoaded", () => {

    const campoPesquisa = document.getElementById("campoPesquisa");

    if (campoPesquisa) {

        campoPesquisa.addEventListener("keydown", (evento) => {

            if (evento.key === "Enter") {

                document.querySelector(".dashboard").style.display = "none";

                document.getElementById("pagina").style.display = "block";

                pesquisarBiblia(campoPesquisa.value);

            }

        });

    }

});
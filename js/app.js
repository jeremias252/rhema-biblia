document.addEventListener("DOMContentLoaded", () => {

    const campoPesquisa = document.getElementById("campoPesquisa");

    if (campoPesquisa) {

        campoPesquisa.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {

                pesquisarBiblia(campoPesquisa.value);

            }

        });

    }

});
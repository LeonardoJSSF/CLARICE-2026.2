function iniciar() {
    document.getElementById("texto").innerHTML = "A animação começará em 5 segundos!";

    setTimeout(function () {
        document.getElementById("imagem").classList.add("animate__animated", "animate__bounce");

        document.getElementById("texto").innerHTML = "Animação concluída!";
    }, 5000);
}

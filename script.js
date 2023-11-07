function searchmovie() {
    let movie = document.getElementById('movie').value;
    let url = "https://www.omdbapi.com/?t=" + movie + "&apikey=3afaa542";

    fetch(url).then(
        function (response) {
            response.json().then(mostrar)
        }
    );
}

function mostrar(dados) {
    let resultado = document.getElementById('resultado');

    if (dados.erro) {
        resultado.innerHTML = "Não foi possível encontrar o filme";
    } else {
        resultado.innerHTML = "<p>Nome: " + dados.Title + "</p>" +
            "<p>Year: " + dados.Year + "</p>" +
            "<p>Released: " + dados.Released + "<br></br>" +
            "<img src='" + dados.Poster + "'></img>";
    }
}

function ordenarPorClasseCrescente() {
    var containerPerguntas = document.getElementById("containerPerguntas");
    var perguntas = containerPerguntas.getElementsByClassName("pergunta");
    var arrayPerguntas = Array.prototype.slice.call(perguntas);

    arrayPerguntas.sort(function(a, b) {
        return parseInt(a.getAttribute("id")) - parseInt(b.getAttribute("id"));
    });

    // Atualiza a ordem das perguntas
    for (var i = 0; i < arrayPerguntas.length; i++) {
        containerPerguntas.appendChild(arrayPerguntas[i]);
    }
}

function ordenarPorClasseDecrescente() {
    var containerPerguntas = document.getElementById("containerPerguntas");
    var perguntas = containerPerguntas.getElementsByClassName("pergunta");
    var arrayPerguntas = Array.prototype.slice.call(perguntas);

    arrayPerguntas.sort(function(a, b) {
        return parseInt(b.getAttribute("id")) - parseInt(a.getAttribute("id"));
    });

    // Atualiza a ordem das perguntas
    for (var i = 0; i < arrayPerguntas.length; i++) {
        containerPerguntas.appendChild(arrayPerguntas[i]);
    }
}
// Define a data final da contagem regressiva (15 de novembro de 2024)
var countDownDate = new Date("Nov 15, 2024 00:00:00").getTime();

// Atualiza o contador a cada segundo
var x = setInterval(function () {
    // Obtém a data atual
    var now = new Date().getTime();

    // Calcula a diferença entre a data final e a atual
    var distance = countDownDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado na página
    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Se a contagem regressiva terminou, exibe a mensagem final
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "O evento começou!";
    }
}, 1000);

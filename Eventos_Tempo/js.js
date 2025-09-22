

function Contar() {
    document.getElementById("teste").innerHTML = "Começou a contar";
    temp = setTimeout(function () {
        document.getElementById('teste').innerHTML = "Executou o setTimeout";
     }, 5000)
}

function Parar() {
    clearTimeout(temp);
    document.getElementById("teste").innerHTML = "Parou";
}

function Contar1() {
    temp = setInterval(function () {
        n = document.getElementById("teste").innerHTML;
        soma = parseInt(n) + 1;
        document.getElementById("teste").innerHTML = soma;
     }, 1000);
}

function Parar1() {
    clearInterval(temp);
}
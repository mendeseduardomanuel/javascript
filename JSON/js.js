const carro = {
    marca : 'toyota',
    modelo: 'rabo de pato',
    ano : 2025
}
//Convertemos objectos em texto
let txt = JSON.stringify(carro);

document.getElementById('teste').innerHTML = txt;

//Convertemos texto em objectos
let obj = JSON.parse(txt);
console.log(obj.ano);
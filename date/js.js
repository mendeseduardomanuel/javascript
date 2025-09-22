const data = new Date();
console.log(data);

let ano = data.getFullYear();
console.log(ano);
let mes = data.getMonth();
const mesEscrito = ["Janeiro", "Feverero", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Septebro", "Outubro", "Novembro", "Dezembro"];
console.log(mesEscrito[mes]);
let diames = data.getDate();
console.log(diames);
let diaSemana = data.getDay();
const diaEscrito = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
console.log(diaEscrito[diaSemana]);

let minuto = data.getMinutes();
console.log(minuto);
let Milisegungos = data.getMilliseconds()
console.log(Milisegungos);

let dataBR = data.toLocaleString('pt-BR', {dateStyle:'short'});
console.log(dataBR);

d = new Date();
Dia = d.getDate(); 
Mes = d.getMonth() + 1;
Ano = d.getFullYear();

function addZero(x) { return x < 0 ? '0' + x : '' + x; }

let dataP = addZero(Dia) + "/" + addZero(Mes) + "/" + Ano;
console.log(dataP);

// Comparação de datas

let dataFabr = new Date();
let dataEsp = new Date(2026, 0, 1);

if (dataFabr > dataEsp) {
    console.log("Sua conta esta Vencida");
} else {
    console.log("Ainda não venceu");
}

var diferencaTemp = dataEsp.getTime() - dataFabr.getTime();
var diferencaDia = Math.ceil(diferencaTemp / (24 * 60 * 60 * 1000));

console.log(diferencaDia + " Dias");
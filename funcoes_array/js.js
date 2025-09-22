/* const nomes = ["Mendes", "Eduardo", "Gouveia", "Manuel"];
//pop remove o ultimo elemento da lista
nomes.pop()
//shift remove o primeiro elemento da lista com o seu indice
nomes.shift();
//push mete um novo elemento na ultima posiçõa no array
nomes.push("yyy");
//document.getElementById('teste').innerText = nomes[1];
alert(nomes.join(" - "));
alert(nomes[nomes.length - 1]);
*/

const lista = ["Arroz", "Feijão", "Leite", "Macarrão"];
const lista2 = ["Oleio", "Fuba", "Pexi"];
//unshift adiciona um novo valor na primeira posição do array 
lista.unshift("Massa");

//delete elimina o primeiro valor da posição do array sem eliminar o indice diferente do shift,
delete lista[0];

//splice adiciona mais valores num determinado indice do array

lista.splice(0, 0, "Leite em Pó", "Leite Condessado");

let lista3 = lista.concat(lista2);

console.log(lista);
console.log(lista3);

const names = ["Mendes", "Manuel", "Gouveia", "Manuel"];
const apelido = names.slice(1, 3);
const apelido1 = names.sort();
names.reverse();

const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);
numeros.sort( function(a,b){return a-b});
document.getElementById("teste").innerHTML = maior20; 

function MaiorNumero(array) {
    return Math.max.apply(null, array);
}

function MenorNumero(array) {
    return Math.min.apply(null,array);
}

function filtragem(value, index, array) {
    return value > 20;
}
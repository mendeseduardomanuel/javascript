class Pessoa{
    constructor(value1, value2, value3) {
        this.nome = value1;
        this.sobrenome = value2;
        this.apelido = value3;
    }   
    
    objectivo() {
        return this.nome + "Aprender js";
    }
}

const Pessoa1 = new Pessoa("Mendes", "Manuel", "Mendinho");
console.log(Pessoa1);
console.log(Pessoa1.objectivo());
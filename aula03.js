// Alguns erros comuns

//const numero; 1° Erro: Não declarar uma constante;


const minhaVar = "oi" // 2° Erro: Não declarar uma variável e chamar no código;
console.log(minhaVar); // exemplo, chamar minhaVar com V minúsculo;

console.error("Isso está errado") // 3° "Erro": Você pode declarar um erro com o console.error;

// Condicional abreviada if(){}

let idadeMinima = 18;
let idadeCliente = 17;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja")
} else {
    console.log("Nescau")
}

// Valor ternário
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco")
// modo ternário, utilizando a estrutura ______ >= ______ ? ______ : ______
// modo ternário, utilizando a estrutura ______ <= ______ ? ______ : ______
// modo ternário, utilizando a estrutura ______ == ______ ? ______ : ______

// Template string

const nome = "André";
const idade = 17;
const cidadeNatal = "Foz do Iguaçu"

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;

console.log(apresentacao)

// template string
const  apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatal}`
console.log(apresentacao2)
//Array base
pessoas = [
 { nome: 'Amanda', idade: 15, sexo: 'FEM' },
 { nome: 'Jefferson', idade: 30, sexo: 'MAS' },
 { nome: 'Lucas', idade: 19, sexo: 'MAS' },
 { nome: 'Julieta', idade: 23, sexo: 'FEM' },
 { nome: 'Luciana', idade: 25, sexo: 'FEM' }
]

//Desestruturação
const {nome, idade, sexo} = pessoas[0];

//Função Map: percorre todo o array, mapeando-o para outro conjunto de valores
const dezAnos = pessoas
            .map( (pessoas) => (pessoas.idade + 10)
            .filter ( (pessoas) => pessoas.sexo === 'FEM'));



console.log(dezAnos);

//Função Filter: percorre todo o array, fazendo um novo array somente com os itens que possuem as condições descritas na função filter()
const mulher = pessoas.filter( (pessoas) => pessoas.sexo === 'FEM');
console.log(mulher);

//Função Find: percorre todo o array, retornando somente o primeiro elemento que encontrar com as condições passadas na função find()
const mulheres = pessoas.find( (pessoas) => pessoas.sexo === 'FEM');
console.log(mulheres);

//Função Reducer:
const idadeMedia = pessoas.reduce( (prevVal, pessoas) => (prevVal + pessoas.idade) / pessoas.length, 0);
console.log(idadeMedia);


// const obj1 = {
//     nome: 'a',
//     sobrenome: 'b'
// }

// const obj2 = {
//     email: 'c'
// }

// const obj3 = {...obj1, ...obj2, nome: 'd'}

const state = {
    nome: 'a',
    sobrenome: 'b',
    email: 'c'
}


state = { ...state, sobrenome: 'sds'}

//sobrenome sobrescreve o sobrenome do state inicial
//spred -> junta varios objetos ( oposto da desestruturação )
//1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

// criar uma função que recebe dois parametros, um multiplicador e um valor (string)
function newArray(multiplicador, valor) {
    // criar um array vazio
    let result = []
    // criar um for loop pra iterar determinadas vezes, de acordo com o teste
    for (let i = 0; i < multiplicador; i++) {        
        // jogar o elemento dentro do array vazio
        result.push(valor)
    }
    // retornar o array "vazio", agora preenchido
    return result
}

console.log(newArray(3,'a', 'b')); //['a', 'a', 'a']
console.log(newArray(6,'b')); //['b', 'b', 'b', 'b', 'b', 'b',]
console.log(newArray(2, 7)); //[7, 7]
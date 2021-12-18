const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // o for/in não vai daar as notas em si, e sim, o indice dentro do array.

for(let i in notas){
    console.log(i, notas[i])
}
const pessoa = {
    nome:'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}
for( let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// console.log(atributo) // usar o let

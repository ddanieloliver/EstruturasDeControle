function getIneiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}
let opcao = -1
do {
    opcao = getIneiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)

} while (opcao != -1)

console.log('Até a próxima')

//È o unico caso em que uma estrutura de controle fica depois do bloco


// a variavel não necessariamente pode ter um valor de cara, por ex:
/*function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 
let opcao //somente iniciada a variável, sem valor inicial!
 
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)
 
console.log('Até a próxima!') */
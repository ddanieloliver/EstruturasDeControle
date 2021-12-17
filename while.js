function getIneiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getIneiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima!')
// o laço continua enquanto a informção fore verdadeira
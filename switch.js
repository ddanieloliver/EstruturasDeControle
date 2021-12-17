const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida.')
    }
    console.log('FIM')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)


//No switch ele vai executar a primeira linha e vai continuar executando todas as outras a menos que eu coloque um break.
//O break serve justamenta para sair da execução;
// SWITCH é uma seleção multipla, não é uma expressão relacional, ou seja, que retorne um valor verdadeiro ou falso.
//Devo tomar cuidado em colocar o break
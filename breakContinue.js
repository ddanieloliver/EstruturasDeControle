const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x==5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y==5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
//o break não age em cima do bloco if, ele aje em cima do bloco mais próximo que seja while, switch, ou for.
//break para, continue interrompe a ação do determinado indice.

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

// Adiciona valores no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Retira ultima posicao do array
console.log(valores.pop())
console.log(valores)

// Funcao delete
delete valores[0]
console.log(valores)

console.log(typeof valores)
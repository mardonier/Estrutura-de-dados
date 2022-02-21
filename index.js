let hitchedSpaceships = ["Elemental", "Helmet", "Colossus"]

console.log(hitchedSpaceships)
hitchedSpaceships.push("Supernova") // adiciona um novo elemento
console.log(hitchedSpaceships)
hitchedSpaceships.pop() // remove o último elemento do array e também retorna o elemento removido
console.log(hitchedSpaceships)

hitchedSpaceships.shift()// remove o primeiro elemento do array e também retorna o elemento removido
let removedSpaceship = hitchedSpaceships.shift()
console.log(removedSpaceship) // Mostra o elemento removido igual ao POP

hitchedSpaceships.shift()// remove o primeiro elemento do array e também retorna o elemento removido

console.log(removedSpaceship) // Mostra o elemento removido igual ao POP

console.log(hitchedSpaceships)
hitchedSpaceships.unshift("Fenix") //Adiciona um elemento na primeira posição
console.log(hitchedSpaceships)

console.log(hitchedSpaceships.length) //Retorna o tamanho do array (3) 0, 1, 2, 3 não esquecer

let elementalPos = hitchedSpaceships.indexOf("Elemental") //retorna a posição do array
console.log(elementalPos)
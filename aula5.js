
const {texto, arquivos, html, alfabeto } = require('./base')

// [abc] → Conjunto         [^] → Negação
// [0-9] →
// [min-maxQUALQUERCOISA]                    
// [^min-maxQUALQUERCOISA] → Tudo menos isso
console.log(alfabeto)
console.log(alfabeto.match(/[^abc123]/g))
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-k]+/g))
console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)) //Negação
console.log(alfabeto.match(/[\uOOAO-\uOOBA]+/g)) // Unicode
console.log(alfabeto.match(/\w+/g))
console.log(alfabeto.match(/\W/g))
console.log(alfabeto.match(/\d+/g))
console.log(alfabeto.match(/\D/g))
console.log(alfabeto.match(/\D+/g))
console.log(alfabeto.match(/\s+/g))
console.log(alfabeto.match(/\S+/g))
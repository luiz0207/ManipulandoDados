// Manipulando Array

let techs = ["html", "css", "js"]

//Adicionar um item no fim
  techs.push("React.js")

// Adicionar no começo
   techs.unshift("sql")

// Remover do fim
   techs.pop()

// Remover do começo
    techs.shift()

// Pegar somente alguns elementos do array
    console.log(techs.slice(2))

// Remover 1 ou mais item em qualquer posição do array
    console.log(techs.splice(1, 2))

// Encontrar a posição de um elemento no array
    let index = techs.indexOf('css')
    console.log(index)

console.log(techs)
// separe um texto que contém espaços, em um novo array onde
// cada texto é uma posição do array. Depois disso, transforme 
// o array em um texto e onde eram espaços, coloque_

let phrase = "Qualquer tecnologia suficientemente avançada é equivalente à mágica"
let myArray = phrase.split(" ") //separando por espaços em brancos
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore) //onde eram espaços coloquei underscore.
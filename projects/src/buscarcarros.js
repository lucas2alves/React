import cars from './cars.js'

// Filtra carros
const filteredCars = cars.filter( (cars)=> {
    return cars.ano  === 2023
})

console.log(filteredCars)

let toPrint = ''

// Carros disponível do ano "2023"
filteredCars.forEach(modelo => {
   toPrint += modelo.modelo + ', '
});

// for( let c = 0; c < filteredCars.length; c++ ){

// }

//Soma quantas unidades de carros eu tenho do ano "2023"
let sumUni = filteredCars.reduce( (prev, next) => {
    return {uni: prev.uni + next.uni}
})

// Map - funções em arrays de retorno individual (cada valor array)
let precos = [120000, 180000, 130000, 190000]
// preços dos veículos que gostei
let juros = precos.map( (preco => {
    return preco / 10 + preco
// meu banco me cobrou 10% de juros para financiar o carro entao o valor será?
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Quantas unidades de carros novos "2023" disponíveis: ' 
    + sumUni.uni + '<br> Preços dos veículos: '  
    + precos + ' '
     + '<br> Valor total dos preços dos veículos com juros 10% de financiamento pelo banco: '  
    + juros + ' '

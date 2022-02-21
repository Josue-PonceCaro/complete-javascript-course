'use strict';
// function describeCountry(country, population, capitalCity){
//     return `${country} hast ${population} million people and it's capital is ${capitalCity}`
// }

// const peruDescript = describeCountry('Peru','30','Lima');
// const usDescript = describeCountry('EEUU','400','Washington DC');
// const mxDescript = describeCountry('Mexico','90','Mexico city');

// console.log(peruDescript);
// console.log(usDescript);
// console.log(mxDescript);

function percentageOfWorld1(population){
    return population/7900*100
}
const percentageOfWorld2 = function(population){
    return population/7900*100
}
const percentageOfWorld3 = population => population/7900*100
console.log(percentageOfWorld2(1441)+'%')   
console.log(percentageOfWorld1(30)+'%')
console.log(percentageOfWorld3(441)+'%')        
console.log(percentageOfWorld2(1441)+'%')   

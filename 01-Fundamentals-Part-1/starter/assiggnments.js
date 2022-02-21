const myCountry = 'Peru';
const myContinent = 'Latin america';
let myCountryPopulation = 30000000;
const isIsland = false;
let language;
// console.log("My conuntry is: " + myCountry);
// console.log("My continent is: " + myContinent);
// console.log("The population of my country is: " + myCountryPopulation)

// console.log("Is my contry an island: " + isIsland);
// console.log("printing all variables types")

// console.log(typeof myCountry)
// console.log(typeof myContinent)
// console.log(typeof myCountryPopulation)
// console.log(typeof isIsland)
// console.log(language)
// console.log(typeof language)
// console.log(null)
// console.log(typeof null)
newPopulation = myCountryPopulation / 2;
newPopulation++;
newPopulation++;
newPopulation /=2
console.log(newPopulation)
console.log(myCountryPopulation > 6000000)
language = 'chinese'
console.log(myCountry + " is in " + myContinent + ", and its " + myCountryPopulation + " people speaks "+ language)

console.log(`${myCountry} is in ${myContinent}, and its ${myCountryPopulation} people speaks ${language}`)

const numNeighbours = Number(prompt('How many neighbours conuntries does your country have?'))
console.log(numNeighbours)
if (numNeighbours === 1) console.log(`${myCountry} have only one neighbour`)
else if (numNeighbours >>> 1) console.log(`${myCountry} have more than one neighbour`)
else console.log(`${myCountry} have not neighbour`)

switch (language){
    case ('mandarin'):
    case ('chinese'):
        console.log('MOST people speaks this language');
        break;
    case ('spanish'):
        console.log('2nd place of native speakers');
        break;
    case ('english'):
        console.log('3rd place');
        break;
    default:
        console.log('Othres also are good languages');
        break;
}
const country = "Colombia";
const continent = "South America";
let population = 50088000;
console.log(country, continent, population);

const isIsland = false;
let language;
console.log(typeof country, typeof continent, typeof population, typeof isIsland, typeof language);

language = "Spanish";

console.log(population / 2);
population++;
console.log(population);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
console.log(population < 33000000);
const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
const descriptionWithLiteral = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);
console.log(descriptionWithLiteral);
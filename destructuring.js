/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [27, 30, 26];
// let John = ages[0];
// let Mary = ages[1];
// let Joe = ages[2];
//console.log(John, Mary, Joe)

let [john , mary, joe] = ages;
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    Mike: "Designer",
    Alicia: "Banker",
    Todd: "Mechanic",
};

let {Mike, Alicia, Todd} = jobs;
console.log(Mike, Alicia, Todd)


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative,johnSecondary) 
//Place commas in place of preceeding objects, to access objects further into the array
let [, , maryNative, Marysecondary] = languages;
console.log(maryNative, Marysecondary);

//Object
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    forthLanguage: "japanese",
}

let {firstLanguage, secondLanguage} = languages2;
console.log(firstLanguage, secondLanguage)

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, Secondfavourite, ...others] = fruits;
console.log(favourite);
console.log(Secondfavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
}

let { brian, anna, ...rest} = favouriteFoods;
console.log(brian, anna, rest)

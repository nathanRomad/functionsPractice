////////////////// Introduction: Age in Dog Years ////////////////////////////////
const calculateAgeInDogYears = (age) => {
    const ageInDogYears = age / 7
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(22)
console.log(dogAge)

//Exporation Tasks:
    //remove return = undefined
    //specify22 = practice.js:8 = 3.142857142857143
    //changeParamToAge = Uncaught ReferenceError: ageOfPerson is not defined
    //resolve = change ageOfPerson to age everywhere it is referenced
    //remove dogAge = Uncaught ReferenceError: dogAge is not defined
        //if you remove console.log() no error but also no answer

//////////////////// Practice: Best in Show //////////////////////////////
const favoriteDogBreed = (dogBreed) => {
    if (dogBreed === "Siberian Husky") {
        return "my favorite dog breed is Siberian Husky!"
    } else {
        (dogBreed === "meow")
        return "I like cats!"
    }
}
const myFavorite = favoriteDogBreed("Siberian Husky")
console.log("When it comes to pets, " + myFavorite)

// Questions to Ask
// Does the function require input to do its job? = yes
// Does the function need to return a value? = yes
// Am I referencing the return value with a variable? = yes, myFavorite
// What should I do with the return value? = console.log(myFavorite)
// What happens if I don't provide an argument at all? = Then, I like cats.
// What happens when I remove the parameter from the definition of the function? = undefined

/////////////////// Practice: Addition ///////////////////////////////
// value1 = 17
// value2 = 4
// value3 = 11
const add = (value1, value2, value3) => {
    return value1 + value2 + value3
}

const answer = add(17, 4, 11)
console.log(answer)

// Exploration Tasks
// Switch the order of your parameters. For example, if your parameters are (first, second, third), then change it to (second, first, third). What effect does that have on the unit of work? = none, it's addition, other math functions would fail if not in correct order.
// Remove one parameter, but not the others. Does the function still work? =no, the third value called in the function is not defined.
// Change the order of the variables when you add them together in the function. Does that affect the output of the function? = again, no. addition. other math functions would suffer.

/////////////////// Practice: Self-Driving Cars ///////////////////////////////

const go = (direction, speed) => {
    let output = "The car is moving " + direction + " at " + speed + " mph!"
if (speed > 75) {
    output += " ...SLOW DOWN!"
}
console.log(output)
}

go("forwards", 74)

/////////////////// Practice: Evens or Odds ///////////////////////////////

const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        const result = "Even"
        return result
    } else {
        const result = "Odd"
        return result
    }
}
let resultEVENorODD = evenOrOdd(88)
console.log(resultEVENorODD)

/////////////////// Practice: Double Functions ///////////////////////////////
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const filterFunction = () => {
    if () {
        
    } else {
        
    }
return 
}
let filterResult = filterFunction()


const convertArray = () => {
return 
}

console.log()



// words startsWith(k)
// Part One

// Take an array of numbers and return the sum
function addUp (numbers) {
    sum = 0;
    for (num in numbers) {
        sum += numbers[num];
    }
    return sum;
}

// Take an array of numbers and return the average
function avg (numbers) {
    sum = 0;
    for (num in numbers) {
        sum += numbers[num];
    }
    return sum / numbers.length;
}

// Take an array of strings and return the longest string
function longest (strings) {
    maxLength = 0;
    index = 0;
    for (string in strings) {
        if (strings[string].length > maxLength) {
            maxLength = strings[string].length;
            index = string;
        }
    }
    return strings[index];
}

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(array, num) {
    wordsLonger = [];
    for (string in array) {
        if (array[string].length > num) {
            wordsLonger.push(array[string])
        }
    }
    return wordsLonger;
}

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function recursionCount(i, n) {
    if (i != n) {
        console.log(i);
        i++
        recursionCount(i, n)
    } 
}

// Part Two

let testData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// console.log(testData)

let ageSort = testData.sort((a, b) => { return a.age - b.age});
console.log(ageSort)

let youngerThan50 = testData.filter((person) => {return person.age <= 50});
//console.log(youngerThan50)

//testData.map(function(person) {
    // change occuaption key to job and increment age by 1
//})
let sum = testData.reduce(function (acc, person) {return acc + +person.age}, 0)
let avgAge = sum / testData.length;



// Part Three 

let object1 = {name: "Tom", age: 4};
let object2 = {name: "Maddie"};
let object3 = {name: "Frank", age: 45};
let object4 = {name: "Sam", age: 18};

function ageUp(obj) {
    if (obj.age) {
        obj.age += 1;
    } else {
        obj.age = 0;
    }
    const date = new Date();
    obj.updated_at = (`${date.getHours()}:${date.getMinutes()}`);
} 


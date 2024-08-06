let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let csv2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// original loopy
// turns csv file into array
function feelingLoopy(file) {
    rows = file.split("\n")

    for (let i = 0; i < rows.length; i++) {
        rows[i] = rows[i].split(",")
    }
    return rows;
}
const array = (feelingLoopy(csv2))

// loopy arrays into object
function loopyObject(rows) {
    let objectArray = []
    rows.forEach(row => {
        row = {id: row[0], name: row[1], occupation: row[2], age: row[3]}
        objectArray.push(row)
    });
    return objectArray
}

const object = loopyObject(array)

// manipulate data using array methods
// removed the first element (header)
header = object.shift()
// removed the last element
object.pop()
// splice add object at index 1
object.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
// added object to end of array
object.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

// use loop to find avg age of group
totalAge = 0
for (let i = 0; i < object.length; i++) {
    totalAge += (+object[i].age)
}
avgAge = totalAge / object.length;


// turn objects into csv format
object.unshift(header)
let arrayOfRows = []
for (let i = 0; i < object.length; i++) {
    let row = `${object[i].id},${object[i].name},${object[i].occupation},${object[i].age}`
    arrayOfRows.push(row)
}
const newCSV = JSON.stringify(arrayOfRows.join('\n'))

// logs string to screen
console.log(newCSV)
// original feeling loopy
const CSV =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let column = "";
let row = [];
let result = [];
// Loop through each character in the CSV string
for (let i = 0; i < CSV.length; i++) {
  const char = CSV[i];
  if (char === ",") {
    // If we encounter a comma, store the current column and reset it
    row.push(column.trim());
    column = ""; // Reset column for the next value
  } else if (char === "\n") {
    // If we encounter a newline, store the last column and log the row
    row.push(column.trim());
    result.push(row);
    //console.log(...row); // Log the current row
    column = ""; // Reset column for the next value
    row = []; // Reset row for the next line
  } else {
    // Otherwise, keep building the current column
    column += char;
  }
}
// Handle the last column if the string does not end with a newline
if (column) {
  row.push(column.trim());
  result.push(row)
  //console.log(...row); // Log the last row
}

// feeling loopy using objects and arrays
//console.log(result)
let objectArray = []
result.forEach(row => {
    // let obj = Object.assign({}, row)
    // console.log((obj))
    row = {id: row[0], name: row[1], occupation: row[2], age: row[3]}
    objectArray.push(row)
});


// manipulate data using array methods
// removed the first element (header)
header = objectArray.shift()
// removed the last element
objectArray.pop()
// splice add object at index 1
objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
// added object to end of array
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

// use loop to find avg age of group
totalAge = 0
for (let i = 0; i < objectArray.length; i++) {
    totalAge += (+objectArray[i].age)
}
avgAge = totalAge / objectArray.length;


// turn objects into csv format
objectArray.unshift(header)
let arrayOfRows = []
for (let i = 0; i < objectArray.length; i++) {
    let row = `${objectArray[i].id},${objectArray[i].name},${objectArray[i].occupation},${objectArray[i].age}`
    arrayOfRows.push(row)
}
const final = JSON.stringify(arrayOfRows.join('\n'))
console.log(final)



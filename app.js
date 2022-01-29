//modules
const xlsx = require("xlsx");

const functions = require("./functions");
//file read
const workbook = xlsx.readFile("test1.xlsx", { cellStyles: true });
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

//parsing to json string(not used now)
// let string = xlsx.utils.sheet_to_json(worksheet);
// console.log(string);

range = xlsx.utils.decode_range(worksheet["!ref"]); //decode the range of cells used in this table
console.log(range);
console.log(worksheet);
let row = 1;
for (let C = range.s.c; C <= range.e.c; ++C) {
  console.log(functions.columnNumber(C) + (range.s.r + row));
  console.log(worksheet[functions.columnNumber(C) + (range.s.r + row)]);
}

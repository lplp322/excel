const xlsx = require("xlsx");
const workbook = xlsx.readFile("test1.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
let string = xlsx.utils.sheet_to_json(worksheet);
console.log(string);

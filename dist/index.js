"use strict";
// Basic Types
let id = 5;
let company = "Iffat Dev";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = ["john", 4, true];
//Tuple
let person = [1, "John", true];
//Tuple Array
let employee;
employee = [
    [77, "Bottas"],
    [44, "Lewis"],
    [55, "Sainz"],
    [5, "Vettel"]
];
// Union
let pid = 22;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Functions 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}

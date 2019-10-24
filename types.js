"use strict";
exports.__esModule = true;
// Boolean
var isBeginner = true;
// number
var total = 10;
// string
var name = 'Lukasz';
var sentence = "My name is " + name + ".\nI am a beginner in TypeScript.";
console.log(sentence);
// Enum
var CartTypes;
(function (CartTypes) {
    CartTypes[CartTypes["Debit"] = 0] = "Debit";
    CartTypes[CartTypes["Credit"] = 1] = "Credit";
    CartTypes[CartTypes["Virtual"] = 2] = "Virtual";
})(CartTypes || (CartTypes = {}));
;
var card = CartTypes.Debit;
console.log(card);
// null
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple
var person1 = ['Chris', 22];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// you can also specify the values likes this:
// enum Color {Red = 3, Green = 2, Blue = 1};
var c = Color.Green;
console.log(c);
// Any
// any allows access to properties of all objects
var randomValue = 10;
randomValue = true;
randomValue = 'Lukasz';
console.log(randomValue.toUpperCase());
// unknown
// unknown is very similar to any, but it does NOT
// allow access to any of the properties of the variable
var randomValue2 = 'Lukasz';
// the following line will not work b/c
// Property 'toUpperCase' does not exist on type 'unknown'.
// console.log(randomValue2.toUpperCase())
// type assertion
console.log(randomValue2.toUpperCase());

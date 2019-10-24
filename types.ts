export {};

// Boolean
let isBeginner: boolean = true;

// number
let total: number = 10;

// string
let name: string = 'Lukasz';
let sentence: string = `My name is ${name}.
I am a beginner in TypeScript.`;

console.log(sentence);

// Enum
enum CartTypes { Debit, Credit, Virtual };
let card: CartTypes = CartTypes.Debit;

console.log(card);

// null
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let person1: [string, number] = ['Chris', 22];

// Enum
enum Color {Red, Green, Blue};
// you can also specify the values likes this:
// enum Color {Red = 3, Green = 2, Blue = 1};
let c: Color = Color.Green;

console.log(c);

// Any
// any allows access to properties of all objects
let randomValue: any = 10;
randomValue = true;
randomValue = 'Lukasz';

console.log(randomValue.toUpperCase());

// unknown
// unknown is very similar to any, but it does NOT
// allow access to any of the properties of the variable
let randomValue2: unknown = 'Lukasz';

// the following line will not work b/c
// Property 'toUpperCase' does not exist on type 'unknown'.
// console.log(randomValue2.toUpperCase())

// type assertion
console.log((randomValue2 as string).toUpperCase());

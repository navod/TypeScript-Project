`tsc sandbox.ts => compile ts file`

`tsc sandbox.ts -w => automatically compile typescript file to javascript`

`tsc --init => when use this command make a file tsconfig.json`

`tsc => initialize ts file`

# Rules

1. `let charactor = "Navod" charactor = 21; //Error // no assigne random values`

2. const circ = (diameter: number) => {
   return diameter \* Math.PI;
   };

console.log(circ(10));

###### when we passing a parameter from function we can set the passing parameter type.

#### 3. arrays

let names = ["navod", "tharanga", "ashen"];

names.push(1); _//cannot pass numbers it can push only string_

let numbers = [1, 5, 20];

numbers.push("1"); //cannot pass numbers it can push only string

// when we define mixed array we can push random types
let mixed = ["navod", 1, 2, "ashen"];
mixed.push(1);
mixed.push("shehan");

// objects

let student = {
name: "navod",
age: 21,
iSMarried: false,
};

student={
name:"ashen" //error
}
// when we define object we can use object but we cannot redefine values

## Assing variable data types

**variables**

---

let address: string;
let age: number;

address = "navod";
address = 123; //Error

// objects
let Student: object;
Student = {
name: "navod",
age: 1,
address: "Panadura",
};

Student = 10; //Error

let Student1: {
name: string;
age: number;
salary: number;
};

Student1 = {
name: "Navod",
age: 10,
salary: "100", //Error
};

// arrays
let array: string[] = [];
array = 1; //Error

// set union types
let union_variable: string | number;
union_variable = "Navod";
union_variable = 1;
union_variable = true; //Error

let union_array: (string | number | boolean)[] = [];
union_array.push(1)
union_array.push("A")
union_array.push(true)

## Dynamic types

we can use any type using keyword [" any "]
let type: any;

type = "navod";
type = 1;
type = true;

let mixed_array: any[] = [];

mixed_array.push(1);
mixed_array.push("Navod");
mixed_array.push(true);

let mixed_obj: {
name: any;
};
console.log(mixed_obj);

## Functions

let calc: Function;

calc = () => {
console.log("Hello");
};

const calc_value = (a: number, b: number) => {
console.log(a \* b);
};

calc_value(5, 10);

---

## type

- we can defind a variable to datatype
  type wordOrdNum = string | number

let x : wordOrdNum;

x = 1;
x= "Navod";
x = true // Error

## Methods

let method1: (a: string, b: string) => void;
method1 = (a: string, b: string) => {
console.log(a, b);
};

method1("a", "b");

let method2: (a: number, b: number) => number;
method2 = (a: number, b: number) => {
return a \* b;
};

## Access Modifiers

public => global
private => only in class
readOnly => cannot change variable value

## Module Exports

app.tx

> import { Invoice } from "./classes/Invoice.js"; //when we imports files in ts file we NEED TO IMPORT JS FILE in ts file

## Interfaces

interface Resource{
uid: number;
resourceName: string;
data: T;
format(): string;
}

## Generics

const addUID = (obj: object) => {
let uid = Math.floor(Math.random() \* 100);
return {...obj, uid};
}

## Enum

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
uid: number;
resourceType: ResourceType;
data: T;
}

const docOne: Resource<object> = {
uid: 1,
resourceType: ResourceType.BOOK,
data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
uid: 10,
resourceType: ResourceType.DIRECTOR,
data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);

## Tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];

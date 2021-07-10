
const pi = 3.14; // constant
let x = 3; // variable
let arr = [];
arr = ["a", 'b', 3, 4.00];
arr1 = new Array(4);

console.log(arr);
console.log(arr.sort());

arr.push(-0.5);

console.log(arr);

// js data types
let y; // undefined
let num = 5; // number (decimal does not matter)
let str = "a" // string (string can use ' or ")
let bool = true; // boolean
let arr2 = [] // array (can contain any type of elements mixed)
let object = {}; // object

let cat = {
    name : 'milky',
    color : ['white', 'black'],
    age : 4
};

console.log(cat)
console.log(cat.color[1])
console.log(cat["color"][1])

function hello(){
    // alert('hello');
    console.log('hello');
    if(1 > 0){
        return;
    }
    console.log('hi');
}

hello();
let a = 1;
let b = 1;

if(a < b){
    console.log('<')
}
else if(a > b){
    console.log('>')
}
else{
    console.log('=')
}

let c = 0;
do{
    c++;
    console.log(c)
}while (c < 10);

for(let d = 0; d < 5 ; d++){
    console.log('for loop')
}

scope();

function scope(){

    {
        console.log(d); // und
        // console.log(e); // error
        var d = 0;
        let e = 0;
        console.log(d);
        console.log(e);
    }
    console.log(d);
    // console.log(e); // error


// console.log(d,e);
// var is initialised as undefined in beginning of program
// var is defined for function scope
// let is defined for immediate bracket scope

}

let f = 0;
switch (f){
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    default:
        console.log('number')
        break;
}

class shape{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get positionX(){
        return x;
    }

}

class Rectangle extends shape{
    constructor(x, y, width, height) {
        super(x,y);
        this.width = width;
        this.height = height;
    }
    get getWidth(){
        return this.width;
    }
    get area(){
        return this.width * this.height;
    }
    set area(value){
        this._area = value;
    }
}

const rectangle = new Rectangle(5, 10, 4,3);
console.log(rectangle.height);
console.log(rectangle.getWidth);
console.log(rectangle.area);
console.log(rectangle.positionX + ' position x');
rectangle.area = 100;
console.log(rectangle.area);



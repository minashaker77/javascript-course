let add = function (x, y) {
    return x + y
}
// add(2,3) ==> 5

// add(2,3,4,5) ==> 5

let add7 = function (x, y) {
    console.log(arguments)
    return x + y
}
// add7(2,3,4,5,6)
// Arguments(5) [2, 3, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 2
// 1: 3
// 2: 4
// 3: 5
// 4: 6
// callee:ƒ (x,y)
// length: 5
// Symbol(Symbol.iterator): ƒ values()
// [[Prototype]]: Object

let add8 = function (x, y) {
    console.log(arguments[0])
    return x + y
}
// add7(2,3,4,5,6)
// 2
// 5

let add2 = function (x, y, z, a, b, c) {
    console.log(arguments)
    return x + y + z + a + b + c
}
// add(2,3,4,5,6) 
let add3 = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
// add(2,3,4,5,6) => 20

//better way:
let add4 = (x, y, ...rest) => {
    console.log(rest)
    return x + y
}
// add(2,3,4,5,6) => 5 [4,5,6]

let add5 = (x, y, ...etc) => {
    console.log('etc',etc)
    return x + y
}
// add(2,3,4,5,6) => 5 [4,5,6]

let add6 = (x, y, ...etc) => {
    console.log("arguments",arguments)
    return x + y
}
// ERROR : no arguments in arrow function
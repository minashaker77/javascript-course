let add = function(x,y){
    return x+y
}
// add(2,3) ==> 5

// add(2,3,4,5) ==> 5
let add2 = function(x,y,z,a,b,c){
    console.log(arguments)
    return x+y+z+a+b+c
}
// add(2,3,4,5,6) 
let add3 = function(){
    let sum = 0;
    for(let i =0; i< arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
// add(2,3,4,5,6) => 20

//better way:
let add4 = (x,y, ...rest) => {
    console.log(rest)
    return x+y
}
// add(2,3,4,5,6) => 5 [4,5,6]

let add5 = (x,y, ...etc) => {
    console.log(etc)
    return x+y
}
// add(2,3,4,5,6) => 5 [4,5,6]

let add6 = (x,y, ...etc) => {
    console.log(arguments)
    return x+y
}
// ERROR : no arguments
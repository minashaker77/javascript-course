function sum(a,b){
    return a+b;
}
// sum(2,3)==> 5
const sum2 = function(a,b){
    return a+b;
}
// sum2(2,3)==>5

(function sum(a,b){
    return a+b;
})(2,3);
// ==> 5

// arrow-function:
const multiple = (a,b) => {
    return a*b;
}
// multiple(2,3) ==> 6
const alphabets = ['a','b','c','d'];

alphabets.map(function(character){
    console.log(character);
})
// a,b,c,d
// arrow-function:
alphabets.map((character)=>{
    console.log(character);
})
// a,b,c,d
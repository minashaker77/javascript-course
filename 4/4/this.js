name = 'mina';
// this.name ==> 'mina'
const me = {
    name: 'ehsan',
    getNameWithNormalFunction: function(){
        console.log('name', this.name);
    }
}

// me.getNameWithNormalFunction() ==> name ehsan


const me2 = {
    name: 'ehsan',
    getNameWithNormalFunction: function(){
        console.log('name', this.name);
    },
    getNameWithArrowFunction: ()=>{
        console.log('name', this.name);
    }
}
// me2.getNameWithArrowFunction() ==> 'mina'

const me3 = {
    name: 'ehsan',
    getNameWithNormalFunction: function(){
        console.log('name', this.name);
    }.bind(this),
}

// me2.getNameWithNormalFunction() ==> name ehsan
///////////////////////////////////////////////

const sum = (a,b) =>{
    return a+b;
}
// sum(2,3)==>5
// sum(2) ==> NaN

const sum2 = (a,b) =>{
    if(b === undefined){
        b =0
    }
    if(a === undefined){
        a =0
    }
    return a+b;
}

//default value when undefined
const sum3 = (a=0,b=0) =>{
    return a+b;
}
//default value when undefined
const sum4 = (a=0,b=1) =>{
    return a+b;
}

////seprate oprator
let add = (x,y,...rest)=>{
    console.log(rest);
    return x+y;
}
// add(2,3,4,5) ==> [4,5]
const names = ['ehsan', 'jack','mina', 'ali']
// console.log(names) ==> ['ehsan', 'jack','mina', 'ali']
// console.log(...names) ==> ehsan jack mina ali

const name = 'mina'
// console.log(...name) ==> m i n a 

const names2 = ['ehsan', 'jack','mina', 'ali']
const additionalNames = [
    'sara','mamad'
]
for(let i = 0 ; i< names.length; i++){
    additionalNames.push(names2[i])
}
const names3 = ['ehsan', 'jack','mina', 'ali']
const additionalNames2 = [
    'sara','mamad',
    //seprate function
    ...names3
]

const CONFIG ={
    size: 100,
    width: 200
}
const ADDITIONAL_CONFIG = {
    HEIGHT: 300,
    size: 150,
    ...CONFIG
}

// HEIGHT: 300,
// size: 100,
// width: 200

const ADDITIONAL_CONFIG2 = {
    ...CONFIG,
    HEIGHT: 300,
    size: 150,
    
}
// HEIGHT: 300,
// size: 150,
// width: 200

const name4 = 'mina';
console.log(...name4);
// ==> m i n a
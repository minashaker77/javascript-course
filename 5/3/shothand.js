//array matching:
const numbers = [1,2,3,4]
const [a,b,c ] =numbers

// skip 3:
const [x,y ,, z]= numbers

//array matching:

const [d,e,f ] = [5,6,7,8]
const [l,m,n] = [d,e,f]
// l === d
// ==> true

// jabejaei meghdar parametereha
let [g,h] = [1 ,2]
// g
// 1
// h
// 2
[g , h] = [ h , g]
// g
// 2
// h
// 1

let [v , k , j] = [ j , k ,v]
// -----------------------------------------
// work on strings:
const anotherName = 'mina'
const surname = 'shaker'
// const sentence = 'I am ' + name + ' ' + surname

const sentence2 = `I am ${anotherName} ${surname} ${6*4} years old`
const sentence3 = `
        I am ${anotherName} ${surname} ${6*4} years old.
        This is a Javascript course`

const setName =(anotherName2)=>{
        console.log('name', anotherName2)
}

// setName('mina')
// name mina

//another way:
setName`mina`
//name ['mina', raw: Array(1)]
const firstname ='mina'
const lastname ='shaker'

setName`I am ${firstname} ${lastname}
        and I am ${6*4} years old
        \n
`
//name (4) ['I am ', ' ', '\n        and I am ', ' years old\n        \n\n', raw: Array(4)]

// name 
// (4) ['I am ', ' ', '\n        and I am ', ' years old\n        \n\n', raw: Array(4)]
// 0
// : 
// "I am "
// 1
// : 
// " "
// 2
// : 
// "\n        and I am "
// 3
// : 
// " years old\n        \n\n"
// length
// : 
// 4
// raw
// : 
// (4) ['I am ', ' ', '\n        and I am ', ' years old\n        \\n\n']
// [[Prototype]]
// : 
// Array(0)
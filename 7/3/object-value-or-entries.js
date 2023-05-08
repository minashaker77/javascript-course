const person ={
    name:'mina',
    surname:'shaker',
    age:24,
    course:'ES6'
}
Object.values(person)
//  ['mina', 'shaker', 24, 'ES6']

Object.values(person).map(item =>{
    console.log(item)
})
// mina
// shaker
// 24
// ES6

Object.entries(person)
// 0
// : 
// (2) ['name', 'mina']
// 1
// : 
// (2) ['surname', 'shaker']
// 2
// : 
// (2) ['age', 24]
// 3
// : 
// (2) ['course', 'ES6']

Object.entries(person).map(item =>{
    console.log(item)
})
// ['name', 'mina']
// ['surname', 'shaker']
// ['age', 24]
// ['course', 'ES6']

Object.entries(person).map(item =>{
    console.log('key', item[0])
    console.log('value', item[1])
})

// key name
// value mina
// key surname
// value shaker
// key age
// value 24
// key course
// value ES6

Object.entries(person).map(([key,value]) =>{
    console.log('key', key)
    console.log('value', value)
})
// key name
// value mina
// key surname
// value shaker
// key age
// value 24
// key course
// value ES6

// befor:
for(index in person){
    console.log('item',person[index])
}
// item mina
// item shaker
// item 24
// item ES6
// assign some objects together

const a = {name: 'mina', surname: 'shaker'}
const b = {age:24 , location: 'tehran'}
const c = {country:'Iran'}
const d = {
    ...a,
    ...b,
    ...c
}

d
// {name: 'mina', surname: 'shaker', age: 24, location: 'tehran', country: 'Iran'}

// another way:
Object.assign(a,b,c)
//{name: 'mina', surname: 'shaker', age: 24, location: 'tehran', country: 'Iran'}

a
// {name: 'mina', surname: 'shaker', age: 24, location: 'tehran', country: 'Iran'}

const f = {job:'junior frontend developer'}
// error:
a = {
    ...a,
    ...f
}


// immutability: update object not change it
Object.assign(a,f)
// {name: 'mina', surname: 'shaker', age: 24, location: 'tehran', country: 'Iran', …}
// age
// : 
// 24
// country
// : 
// "Iran"
// job
// : 
// "junior frontend developer"
// location
// : 
// "tehran"
// name
// : 
// "mina"
// surname
// : 
// "shaker"
// [[Prototype]]
// : 
// Object

a.teacher = true;
// true
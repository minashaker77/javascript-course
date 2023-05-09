let person ={
    name:'mina',
    surname:'shaker',
    age:24,
    course:'ES6'
}
if(person.name){
    console.log('YES')
}
// YES


if(person.name2){
    console.log('YES')
}
//undefined

if(person.portolio.year1){
    console.log('YES')
}
// ERROR

if(person && person.portfolio && person.portfolio.year1){
    console.log('YES')
}
// undefined

// optional chaining:
if(person?.portolio?.year1){
    console.log('YES')
}
// undefined

let persons = [
    {
        name: 'mina'
    }
]
if(persons[0]){
    console.log('Yes')
}
// Yes

if(persons[1].name){
    console.log('Yes')
}
//ERROR

if(persons?.[1]?.name){
    console.log('Yes')
}
// undefined

//allSettled:

let fetchAPI = async ()=>{
    try{
        const response2 = await fetch("https://reqres.in/api/users/2")
        const result2 = await response2.json()
        return result2
    } catch(error){
        console.log('error:' , error)
    }
}
let fetchAPI2 = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('done fetch api2');
        },2000)
    })
}
let fetchAPI3 = () => {
    return new Promise(( reject) => {
        setTimeout(()=>{
            reject('reject fetch api3');
        },2000)
    })
}

Promise.all([
    fetchAPI(),
    fetchAPI2(),
    fetchAPI3(),

]).then(([res1,res2,res3])=>{
    console.log('res1', res1)
    console.log('res2', res2)
    console.log('res3', res3)

}).catch((error)=>{
    console.log('error:' , error)
})
// res1 {data: {…}, support: {…}}
// res2 done fetch api2
// res3 reject fetch api3

Promise.allSettled([
    fetchAPI(),
    fetchAPI2(),
    fetchAPI3(),

]).then(([res1,res2,res3])=>{
    console.log('res1', res1)
    console.log('res2', res2)
    console.log('res3', res3)

}).catch((error)=>{
    console.log('error:' , error)
})
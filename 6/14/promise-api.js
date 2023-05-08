// Promise 

fetch("https://reqres.in/api/users/2")

let fetchAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('resolve')
            resolve('done');
        },1000)
    })
}


fetchAPI()
.then((response) => { 
    console.log('response :', response) 
})


let fetchAPI2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('something wrong happend');
        },1000)
    })
}

fetchAPI2()
.then((error) => { 
    console.log('error', error) 
})
.catch((error)=>{
    console.log('error :', error)
})


fetch('https://reqres.in/api/users/2')
.then((response)=>{
    console.log('response',response)
})
.catch((error)=>{
    console.log('error',error)
})
// result 
// {data: {…}, support: {…}}
// data: avatar: "https://reqres.in/img/faces/2-image.jpg"
// email: 
// "janet.weaver@reqres.in"
// first_name: "Janet"
// id: 2
// last_name: "Weaver"
// [[Prototype]]: Object
// support: text: "To keep ReqRes free, contributions towards server costs are appreciated!"
// url: "https://reqres.in/#support-heading"
// [[Prototype]]: Object
// [[Prototype]]: Object
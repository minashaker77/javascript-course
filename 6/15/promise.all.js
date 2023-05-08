let fetchAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('done fetch api')
            resolve('done');
        },1000)
    })
}
let fetchAPI2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('done fetch api2')
            resolve('done');
        },2000)
    })
}
let fetchAPI3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('done fetch api3')
            resolve('done');
        },3000)
    })
}
let fetchAPI4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('done fetch api4')
            resolve('done');
        },4000)
    })
}


Promise.all([
    fetchAPI(),
    fetchAPI2(),
    fetchAPI3(),
    fetchAPI4()
]).then((data)=>{
    console.log('data', data)
})
// done fetch api
// done fetch api2
// done fetch api3
// done fetch api4

Promise.all([
    fetchAPI(),
    fetchAPI2(),
    fetchAPI3(),
    fetchAPI4()
]).then(([res1,res2,res3,res4])=>{
    console.log('res1', res1)
    console.log('res2', res2)
    console.log('res3', res3)
    console.log('res4', res4)
})
// done fetch api
// done fetch api2
// done fetch api3
// done fetch api4
// res1 done
// res2 done
// res3 done
// res4 done

let fetchAPI5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('done fetch api4')
            reject('rejected');
        },3000)
    })
}

Promise.all([
    fetchAPI(),
    fetchAPI2(),
    fetchAPI3(),
    fetchAPI4(),
    fetchAPI5()
]).then(([res1,res2,res3,res4,res5])=>{
    console.log('res1', res1)
    console.log('res2', res2)
    console.log('res3', res3)
    console.log('res4', res4)
    console.log('res5', res5)
}).catch((error)=>{
    console.log('error:' , error)
})

// done fetch api
// done fetch api2
// done fetch api3
// done fetch api4
// error: rejected
// done fetch api4
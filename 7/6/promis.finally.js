let fetchAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, 1000)
    })
}

await fetchAPI()
// done
fetchAPI().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})
//done


let fetchAPI2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error')
        }, 1000)
    })
}
fetchAPI2().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})
// error

fetchAPI2().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
}).finally((result) => {
    console.log(result)
})

// error
// undefined

let fetchAPI3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, 1000)
    })
}
fetchAPI3().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
}).finally((result) => {
    console.log(result)
})
// done
// undefined

let fetchAPI4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, 1000)
    })
}

fetchAPI4().then((response) => {
    console.log(response)
    return response
}).catch((error) => {
    console.log(error)
}).finally((result) => {
    console.log(result)
})
// done
// undefined


fetchAPI4().then((response) => {
    console.log(response)
    return response
})
    .then((response2) => {
        console.log(response2)
        return response2
    })
    .catch((error) => {
        console.log(error)
    }).finally((result) => {
        console.log(result)
    })

// done
// done
// undefined


//chaining:
fetchAPI4().then((response) => {
    console.log(response)
    return response
})
    .then((response2) => {
        console.log(response2)
        return response2
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log('finally')
    })
// done
// done
// finally

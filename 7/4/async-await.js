let apiResponse = null;

fetch("https://reqres.in/api/users/2")
.then((response)=>{
    response.json()
    .then((result)=>{
        console.log('result',result)
        apiResponse = result
    })
    .catch((error)=>{
        console.log('error',error)
    })
    .catch((error) => {
        console.log('error', error)
    })
})
console.log('apiResponse', apiResponse)

const response = await fetch("https://reqres.in/api/users/2")
const result = await response.json()
result

try{
    const response2 = await fetch("https://reqres.in/api/users/2")
    const result2 = await response2.json()
    console.log('result', result2)
} catch(error){
    console.log('error:' , error)
}

let fetchAPI = async ()=>{
    try{
        const response2 = await fetch("https://reqres.in/api/users/2")
        const result2 = await response2.json()
        return result2
    } catch(error){
        console.log('error:' , error)
    }
}

//both of these are same each other:
fetchAPI().then((response2) => {console.log(response2)})

await fetchAPI()
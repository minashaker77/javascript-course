// find / finIndex

const names = ['ehsan','alex','jack','robert']

names.indexOf('jack')
// 2

names.find(item => item === 'jack')
//'jack'

names.find(item => {
    return item[0] === 'j'
})
//'jack'


//find something in array of jsons:
const movies = [
    {id:1 , name:'star wars'},
    {id:2 , name:'iron man'},
]

movies.find(item => item.id ===2)
// {id: 2, name: 'iron man'}

movies.find(item => {
    return item.id === 1
})

movies.findIndex(item => item.id === 2)
// 1

movies[1]
// {id: 2, name: 'iron man'}

movies.filter(item => item.id === 2)
// [{…}]
// 0:{id: 2, name: 'iron man'}
// length:1


// filter array with condition:
const numbers = [1,2,3,4,5,6]
numbers.filter(item => item > 2)
//[3, 4, 5, 6]

numbers.filter(item => {
    if(item ===1){
        return true
    }
    if( item === 3){
        return false
    }
})
//0: 1
// length: 1
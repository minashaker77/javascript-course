// Proxy

const player = {
    name: 'Mina',
    age: 24,
    game: 'fortnite',
    location: 'tehran',
    country: 'Iran'
}

let handler = {
    get(target, property) {
        console.log('target', target)
        console.log('property', property)
    }
}


let myProxy = new Proxy(player, handler)

myProxy.name
// target => {name: 'Mina', age: 24, game: 'fortnite', location: 'tehran', country: 'Iran'}

let handler2 = {
    get(target, property) {
        console.log('This is get for proxy', property)
        if(target[property] === 24){
            return 20
        }
        return target[property]
    }
}

let myProxy2 = new Proxy(player, handler2)

myProxy2.name
//  This is get for proxy name
// 'Mina'
myProxy2.age
//  This is get for proxy age
// 20

let handler3 = {
    get(target, property) {
        console.log('This is get for proxy', property)
        if(target[property] === 24){
            return 20
        }
        return target[property]
    },
    set(target, property, value) {
        console.log('This is set for proxy', property)
        let  newValue= value
        if(property === 'age'){
            newValue--
        }
        target[property] = newValue
    }
}
let myProxy3 = new Proxy(player, handler3)

myProxy3.name = 'alex'
//  This is set for proxy name
// 'alex'

myProxy3.age = 32
// This is set for proxy age
// 32
myProxy3.age
//  This is get for proxy age
// 31
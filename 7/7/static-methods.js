class Airplane {
    constructor({name='F80'}){
        this._name = name
    }
    print =()=>{
        console.log('This is a plane')
    }
}
const airplane = new Airplane({name: 'A380'})
airplane.print()
//  This is a plane

class Airplane {
    constructor({name='F80'}){
        this._name = name
    }
    static print =()=>{
        console.log('This is a plane')
    }
}

Airplane.print()
// This is a plane

const airplane2 = new Airplane({name: 'A380'})
//error

class Airplane {
    constructor({name='F80'}){
        this._name = name
    }
    static print =()=>{
        console.log('This is a plane', this._name)
    }
}
// undefined

class Airplane {
    constructor({name='F80'}){
        this._name = name
    }
    static calculateHeightOfAirplane =(x,y)=>{
        return x * y
    }
    print =()=>{
        const p = Airplane.calculateHeightOfAirplane(2,3)
        console.log(p)
    }
}
Airplane.calculateHeightOfAirplane(2,3)

const airplane3 = new Airplane({name: 'A380'})
airplane3.print()
//undefined


const airplane4 = new Airplane({name: 'A380'})
airplane4.print()
// 6
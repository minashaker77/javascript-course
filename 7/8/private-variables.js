class House {
    _area = 2
    constructor({area}){
        this._area = area
    }
}
const house = new House({area: 10})
house._area
// 10

class House2 {
    _area = 2
}

const house2 = new House2()
house2._area
// 2

class House3 {
    #area = 2
}
const house3 = new House3()
house3
// .... no access! 

class House4 {
    #area = 2
    printArea = ()=>{
        console.log('area', this.#area)
    }
}

const house4 = new House4()
house4.printArea()
//area 2

class House5 {
    static #area = 2
    printArea = ()=>{
        console.log('area', House5.#area)
    }
}

const house5 = new House5()
house5.printArea()
//area 2
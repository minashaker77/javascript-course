class Robot {
    constructor({x,y}){
        // private variable with _:
        this._x = x,
        this._y = y
    }
    getX(){
        return this._x
    }
}

const robot1 = new Robot({x: 10, y: 20})
robot1._x
robot1.getX()

class Robot2 {
    constructor({x,y}){
        // private variable with _:
        this._x = x,
        this._y = y
    }
    get x(){
        return this._x
    }
}

const robot2 = new Robot2({x: 10, y: 20})
robot2.x


class Robot3 {
    constructor({x,y}){
        // protected variable with _:
        this._x = x,
        this._y = y
    }
    get x(){
        return this._x
    }
    get y(){
        return this._y
    }
    set x(x){
        return this._x = x
    }
    set y(y){
        return this._y = y
    }
}

const robot3 = new Robot3({x: 10, y: 20})
// cal get x():
robot3.x
// call set(x):
robot3.x = 12

class Robot4 {
    constructor({x,y}){
        this._x = x,
        this._y = y
    }
    get x(){
        return this._x
    }
    get y(){
        return this._y
    }
    set x(x){
        return this._x = x
    }
    set y(y){
        return this._y = y
    }
    get distance(){
        return this._x + this._y
    }
}
const robot4 = new Robot4({x: 10, y: 20})
robot4.distance
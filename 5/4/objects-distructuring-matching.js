// const [a , b] = [1,2,3,4]

//distructuring:
const {a , b} = {a:1 , b:2 , c: 3}
// a
// 1
// b
// 2
const config = {
    size: 2,
    width: 100
}
// const size = config.size
// const width = config.width
const {size , width} = config

const config2 = {
    size2: 2,
    width2: 100,
    box: {
        color: 'red',
    }
}
const {size2 , width2 , box:{color}} = config2
// size2
// 2
// box
// ERROR:1 Uncaught ReferenceError: box is not defined
// color
// 'red'
const config3 = {
    size3: 2,
    width3: 100,
    box3: {
        color: 'red',
    }
}
//change variable name:
// const size: config3.size
// const mySize = size 
const {size3:mySize } = config3
// mySize
// 2

const config4 = {
    size4: 2,
    width4: 100,
    box: {
        color: 'red',
    }
}
const {size4 , height}=config4
//height
// undefined
const config5 = {
    size5: 2,
    width5: 100,
    box: {
        color: 'red',
    }
}
// default value:
const {size5 , height5 = 200}=config5
// height5
// 200
const calculateSpace = ({
        width, height
    }) => {
        return width * height
}
// calculateSpace({width:100, height:200})
// 20000


// change variable name:
const calculateSpace2 = ({
    width:w, height:h
}) => {
    return w * h
}
// calculateSpace2({width:100, height:200})
// 20000

//default value:
const calculateSpace3 = ({
    width, height=30
}) => {
    return width * height
}
// calculateSpace3({width:100})
// 3000

const calculateSpace4 = ({
    width:w, height:h=30
}) => {
    return w * h
}
// calculateSpace4({width:100})
// 3000
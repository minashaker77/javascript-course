const number = 30
if(number> 20 && number<40){
    console.log('Yes I\'m in IF')
}

//Yes I\'m in IF
if(number > 40 || number<40){
    console.log('Yes I\'m in IF')
}
//Yes I\'m in IF

const visible = undefined
const show = false;
    if(visible)
        show = true

// it mean if visible === undefined , default value: false
const show2 = visible || false
show2
//false
const show3 = visible || 'notVisible'
show3
// false

const visible2 = 'visible'
const show4 = visible2 || 'notVisible'
show4
//'visible'

const visible3 = undefined
const show5 = visible3 && 'show'
// undefined

const visible4 = 'visible'
const show6 = visible4 && 'show'
show6
//'show'


Math.pow(2,3)
// 8

2**3
// 8
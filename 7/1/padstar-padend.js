class Robot {
    constructor({size}){
        this.size = size
    }
    width = 100
}
const robot1 = new Robot({size: 'medium'})
robot1.size
// 'medium'
robot1.width
// 100

"M ".repeat(4)
//'M M M M '

"1".padStart(4,'0')
// '0001'

"1".padStart(4,0)
// '0001'

const cardNubmer = "251451584168468"
const FourLastDigits = cardNubmer.slice(-4)
FourLastDigits
// '8468'

const maskCardNumber = FourLastDigits.padStart(16,'*')
maskCardNumber
// '************8468'

const cardNubmer2 = "251451584168468"
const FourFirstDigits = cardNubmer2.slice(0,4)
FourFirstDigits.padEnd(16,'*')
//'2514************'
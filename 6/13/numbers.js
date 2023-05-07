null
NaN

parseFloat('ahskjdvjh')
// NaN = not a number

const a = parseFloat('ahskjdvjh')
a === NaN
// false

Number.isNaN(a)
//true

Number.isNaN('fd')
//false

Number.isNaN(654)
// false

Number.isNaN(NaN)
// true

Number.isFinite(5464)
// true

Number.isFinite('dkjchfud')
// false

2/0
// Infinity

-2/0
//-Infinity

Number.isFinite(2/0)
// false

Number.isFinite(Infinity)
// false

Number.isFinite(-Infinity)
// false

Number.isSafeInteger(100)
//true

// Number.isSafeInteger(10000000000000000)
// false

// hazfe a'ashar
Math.trunc(3.99)
// 3

Math.round(3.99)
// 4

Math.sign(0)
// 0 ==> na mosbat na manfi

Math.sign(100)
// 1 ==> mosbat

Math.sign(-100)
// -1 ==> manfi

Math.sign(100/0)
// 1
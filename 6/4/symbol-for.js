const a = Symbol.for('Ehsan')
const b = Symbol.for('Ehsan')
// a === b
// true

const d = Symbol()
const e = Symbol()
// d === e
// false

const f = Symbol.for('Ehsan')
const g = Symbol.for('Gazar')
// f === g
// false

Symbol.keyFor(f)
// 'Ehsan'
Symbol.keyFor(g)
// 'Gazar'

const obj ={}
obj.f = '111'
obj.g = '222'
// obj
// {f: '111', g: '222'}

obj[f] = 'Symbol A'
obj[g] = 'Symbol B'

obj
// {f: '111',
// g: '222',
// Symbol(Ehsan): 'Symbol A',
//  Symbol(Gazar): 'Symbol B'}

JSON.stringify(obj)
// '{"f":"111","g":"222"}'

Object.getOwnPropertyNames(obj)
// (2) ['f', 'g']

Object.getOwnPropertySymbols(obj)
// (2) [Symbol(Ehsan), Symbol(Gazar)]

Object.getOwnPropertySymbols(obj)[0] === f
// true
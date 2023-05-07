
// create uniqe variable:
const a = Symbol()
// a
// Symbol()

Symbol() === Symbol()
// false
const b = Symbol()
a === b 
// false
const c = Symbol('This is sample test')
c === a 
// false
c === b 
// false
const NAME = Symbol()
const PERSON = {
    [NAME] : 'Ehsan'
}
// PERSON
// {Symbol(): 'Ehsan'}

// PERSON.NAME
// undefined

// PERSON['Symbol()']
// undefined

// PERSON[NAME]
// 'Ehsan'
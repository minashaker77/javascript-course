// globalThis

let Tname = "Ehsan Gazar is a teacher"

Tname.replace('teacher','programmer')
'Ehsan Gazar is a programmer'

let Tname2 = "Ehsan Gazar is a teacher , and jack is also a teacher"

Tname2.replace('teacher','programmer')
'Ehsan Gazar is a programmer , and jack is also a teacher'


Tname2.replaceAll('teacher','programmer')
'Ehsan Gazar is a programmer , and jack is also a programmer'

let title;
title ||= 'untitled';

console.log(title);
// untitled
title
// 'untitled'


let title2 = 'JavaScript Awesome';
title2 ||= 'untitled';

console.log(title2);
// 'JavaScript Awesome'

// above lines said:
if(!title2) title2 = "untitled"
//---------------------------------------
let title3 = 'JavaScript Awesome';
title3 &&= 'untitled';
//'untitled'

// above lines said:
if(!title3) title3 = "untitled" 

//=========================================

const budget = 1000000000;
// undefined
const budget2 = 1_000_000_000;
// undefined
budget
// 1000000000
budget2
// 1000000000
const milion = 1000000;
const milion1 = 1_000_000;
//--------------------------------

class Person {
    #myName;
    constructor(value) {
        this.#myName = value;
    }
    get myName() {
        return this.#myName;
    }
}
const person1 = new Person("Ehsan")
person1.myName
'Ehsan'

class Person2 {
    #myName;
    #surname;
    constructor(value , value2) {
        this.#myName = value;
        this.#surname = value2;
    }
    get myName() {
        return this.#myName + this.#surname ;
    }

}
const person2 = new Person2("Ehsan","Gazar")
person2.myName
// 'EhsanGazar'
Person2.surname
// undefined

//======================

const myName2 = ["mina", "shaker","jack","robert"]
myName2.at(2)
// 'jack'
myName2[2]
// 'jack'

myName2.at(-1)
// 'robert'
myName2[myName2.length - 1]
// 'robert'
const name = 'mina';
// const person ={
//     age: 24,
//     name: name,
// }
const person ={
    age: 24,
    name,
}
//==> {age: 24, name: 'mina'}
// const person1 = {
//     age: 24,
//     name,
//     education_1:'bachelor',
// }
person1['education-1'] = 'bachelor'

// ==> {age: 24, name: 'mina', education_1: 'bachelor', education-1: 'bachelor'}
const person2 ={
    age: 24,
    name,
    ['education-1'] : 'bachelor'
}
//{age: 24, name: 'mina', education-1: 'bachelor'}
const number = 10;
const person3 ={
    age: 24,
    name,
    ['education-1'] : 'bachelor',
    [`education-${number}`] : 'bachelor'
}
// ==> {age: 24, name: 'mina', education-1: 'bachelor', education-10: 'bachelor'}

const school = {
    name: 'Hafez',
    getName:function(){
        return this.name
    }
}
// school.name
// 'Hafez

const school1 = {
    name: 'Hafez',
    getName(){
        return this.name
    }
}
// school.getName();
// 'Hafez
const school2 = {
    name: 'Hafez',
    getName(){
        return this.name
    },
    setName(name){
        this.name = name
    }
}

// school2.getName()
// 'Hafez'

school2.setName('Emja')
// school2.getName()
// 'Emja'

// school2.name
// 'Emja'

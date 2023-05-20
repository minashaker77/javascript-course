const myName = 'mina';
const person ={
        age: 24,
        myName: myName,
}
const person4 = {
        age: 24,
        myName,
}
//both:==> {age: 24, myName: 'mina'}


const person1 = {
        age: 24,
        myName,
        education_1:'bachelor',
}
person1['education-1'] = 'bachelor'
// person1 ==> {age: 24, myName: 'mina', education_1: 'bachelor', education-1: 'bachelor'}

const person2 = {
        age: 24,
        myName,
        ['education-1']: 'bachelor'
}
//person2: ==> {age: 24, myName: 'mina', education-1: 'bachelor'}

const number = 10;
const person3 = {
        age: 24,
        myName,
        ['education-1']: 'bachelor',
        [`education-${number}`]: 'bachelor'
}
//person3 ==> {age: 24, myName: 'mina', education-1: 'bachelor', education-10: 'bachelor'}

const school = {
        myName: 'Hafez',
        getName: function () {
                return this.myName
        }
}
// school.myName
// 'Hafez'

const school1 = {
        myName: 'Hafez',
        getName() {
                return this.myName
        }
}
// school1.getName();
// 'Hafez'
const school2 = {
        myName: 'Hafez',
        getName() {
                return this.myName
        },
        setName(myName) {
                this.myName = myName
        }
}

// school2.getName()
// 'Hafez'

school2.setName('Emja')
// school2.getName()
// 'Emja'

// school2.myName
// 'Emja'

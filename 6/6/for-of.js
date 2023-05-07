const names = ['ehsan','alex','jack','robert']
names.map((item)=> console.log(item))
// ehsan
// alex
// jack
// robert

names.forEach((item)=> console.log(item))
// ehsan
// alex
// jack
// robert

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}
// ehsan
// alex
// jack
// robert

for(index in names){
    console.log(names[index])
}
// ehsan
// alex
// jack
// robert

//it work on array: va value ro mide bejaye index
for(item of names){
    console.log(item)
}
// ehsan
// alex
// jack
// robert

const player ={
    name:'Ehsan',
    age: 30,
    game:'fortnite',
    location:'melborne',
    country:'Astralia'
}
// it works on array and json :
// for in dar array index ro mide 
// dar json key ya value ro mide
for (key in player){
    console.log(key)
}
// name
// age
// game
// location
// country

for (key in player){
    console.log(player[key])
}
// Ehsan
// 30
// fortnite
// melborne
// Astralia

for (key in player){
    console.log(key , player[key])
}
// name Ehsan
// age 30
// game fortnite
// location melborne
// country Astralia
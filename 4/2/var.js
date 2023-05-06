var a = 2;
a = 3;
// a ==> 3
let c =2;
c =3;
// c==> 3
for(var i = 0; i < 10; i++){
    console.log(i)
}
// i ==> 10
for(let j = 0; j < 10; j++){
    console.log(j)
}
// j ==> undefined ,
// scope yani tuye bracket tarif shode


for(var x = 0; x < 10; x++){
    var newX = '10';
    console.log(newX)
}
// newX ==> '10'
for(let y = 0; y < 10; y++){
    let newY = '10';
    console.log(newY)
}
// newY ==> undefined
const names = ['ehsan' , 'mina', 'ali', 'alex' , 'robert']
for(let i = 0; i< 4 ; i++){
    if(names[i]==='ali'){
        var aliIndex = i
    }
}
// aliIndex ==> 2

for(let i = 0; i< 4 ; i++){
    if(names[i]==='ali'){
        let aliIndexWithLet = i
    }
}
// aliIndexWithLet ==> undefined


//prefer this syntax:
let aliIndexWithLet = null;
for(let i = 0; i< 4 ; i++){
    if(names[i]==='ali'){
        aliIndexWithLet = i
    }
}
// aliIndexWithLet ==> 2
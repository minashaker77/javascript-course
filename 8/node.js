var originalArray = [5,4,6,1,3,2]
// bubble sort:

// for(var i = 0; i < originalArray.length; i++){
//     for(var j = 0; j < originalArray.length; j++){
//         if(originalArray[i] < originalArray[j]){
//             var temp = originalArray[j]
//             originalArray[j] = originalArray[i]
//             originalArray[i] = temp
//         }
//     }
// }
// console.log(originalArray)


// bubble sort in javascript:
originalArray.sort(function(number1 , number2){
    return number2 - number1;
})

var testArray = [1,2,3,4,577,67,'a','v']

var push = function(testArray , newItem){
    var temp = testArray;
    temp.length = testArray.length + 1;
    temp[temp.length-1] = newItem;
    testArray = temp;
}

var pull = function(testArray){
    var temp = testArray;
    temp.length = testArray.length - 1;
    testArray = temp;

}
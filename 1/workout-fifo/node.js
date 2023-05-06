
var testArray = [1,2,3,4,577,67,'a','v']

var push = function(testArray , newElement){
    var temp = testArray;
    temp.length = testArray.length + 1;
    temp[temp.length-1] = newElement;
    testArray = temp;
}

var pull = function(testArray){
    var temp = testArray;
    temp.length = testArray.length - 1;
    testArray = temp;

}
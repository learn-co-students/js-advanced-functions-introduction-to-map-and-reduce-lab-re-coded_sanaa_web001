// Your code here


function  mapToNegativize(sourceArray) {
  return sourceArray.map((ele)=>-ele );
}
let arr =[1,2,3,4,5];
console.log(mapToNegativize(arr));
function  mapToNoChange(sourceArray) {
  return sourceArray;
}
function mapToDouble (sourceArray){
  return sourceArray.map((ele)=>ele*2 );
}
function mapToSquare(sourceArray){
  return sourceArray.map((ele)=>ele*ele );
}
function reduceToTotal(sourceArray,startingPoint=0){
  return sourceArray.reduce((acc,curr)=>acc+curr ,startingPoint);
}
function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (!sourceArray[i]) return false
  }
  return true
}
function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) return true
  }
  return false
}



// Your code here
mapToNegativize= (arr) => {
  return arr.map(e => e*-1);
}
mapToNegativize([1, 2, 3, -9])

function mapToNoChange(dune){
  return dune.map(e => e) ;
}

let dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
mapToNoChange(dune) ;

function mapToDouble  (arr) {

  return  arr.map(e => e*2) ;
}
mapToDouble([1, 2, 3, -9]);
function mapToSquare (arr) {
  return arr.map(e => e*e) ;
}

mapToSquare([1, 2, 3, -9]) ;

let sourceArray = [1,2,3];
reduceToTotal(sourceArray) ;



function reduceToTotal (arr , init) {
  console.log(init);
  if(init == undefined) {
    return arr.reduce((sum , current) => {
      return sum+current ;
    } , 0);
  }
  else{
    return arr.reduce((sum , current) => {return sum+current} , init);

  }
}


let startingPoint = 100
reduceToTotal(sourceArray, startingPoint) ;



function reduceToAllTrue (arr) {
    return arr.reduce((sum ,current) => (current ? true : false) , 1) ;
}

sourceArray = [1, 2, true, "razmatazz"]
reduceToAllTrue(sourceArray)


function reduceToAnyTrue (arr) {
    return arr.reduce((sum ,current) => current) ;
}
// sourceArray = [ false, null, null, null]
// reduceToAnyTrue(sourceArray)

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((sum  , current ) => { return sum} , false);
}
 sourceArray = [ false, null, null, null]
reduceToAnyTrue(sourceArray);

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((sum  , current ) => { return current} , true) ;
}

sourceArray = [ false, null, null, null, true]
reduceToAnyTrue(sourceArray);

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce((sum  , current ) => { return current ? true : false} , true);
}
sourceArray = [1, 2, true, "razmatazz"]
reduceToAnyTrue(sourceArray)

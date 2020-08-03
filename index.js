// Your code here
function mapToNegativize(arr) {
    var negArray = new Array();
  arr.forEach(element => {
    negArray.push(-1 * element);
  });     
    
    return negArray;
  }
  
function mapToNoChange(arr){
    var origArr=new Array();
    arr.forEach(element => {
        origArr.push(element);
    });
    return origArr;
}

function mapToDouble(arr){
    var mulArray = new Array();
   arr.forEach(element => {
    mulArray.push(2 * element);
   });
        
    
    return mulArray;
}

function mapToSquare(arr){
    var powArray = new Array();
    arr.forEach(element => {
        powArray.push(element**2);
    });
    return powArray;
}

// my own map-like methods
//     mapToNegativize returns an array with all values made negative
//       1) transforms correctly
//       mapToNoChange returns an array with the original values
//         2) transforms correctly
//       mapToDouble returns an array with the original values multiplied by 2
//         3) transforms correctly
//       mapToSquare returns an array with the original values squared
//         4) transforms correctly

function reduceToTotal(arr,startingPoint=0){
    var total=startingPoint;
    arr.forEach(element => {
    total+=element;
    });
    return total;
}

function reduceToAllTrue(arr) {
    for (var i = 0; i < arr.length; i++ ) {
      if (!arr[i]) 
      return false;
    }
    return true
  }
  
  function reduceToAnyTrue(arr) {
    for (var i = 0; i < arr.length; i++ ) {
      if (arr[i]) 
      return true;
    }
    return false;
  }


// my own reduce-like methods
// reduceToTotal returns a running total when not given a starting point
//   1) reduces correctly
// reduceToTotal returns a running total when given a starting point
//   2) reduces correctly
// reduceToAllTrue returns true when all values are truthy
//   3) reduces correctly
// reduceToAllTrue returns false when any value is falsy
//   4) reduces correctly
// reduceToAnyTrue returns true when a true value is present
//   5) reduces correctly
// reduceToAnyTrue returns false when no true value is present
//   6) reduces correctly
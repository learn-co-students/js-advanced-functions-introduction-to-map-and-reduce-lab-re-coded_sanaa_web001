// Your code here
const arr= [false,0 ,0,0]

function mapToNegativize(srArr){
    const possitive = srArr.map(e=> e * -1)
    console.log (possitive);
    return possitive;
}
mapToNegativize(arr);

function mapToNoChange(srArr){
    const orgenal = srArr.map (e => e)
    console.log (orgenal);    
    return orgenal;
}
mapToNoChange(arr)

function mapToDouble(srArr){
    const double = srArr.map (e => e * 2)
    console.log (double);    
    return double;
}
mapToDouble(arr)

function mapToSquare(srArr){
    const square = srArr.map (e => e * e)
    console.log (square);    
    return square;
}
mapToSquare(arr)

function reduceToTotal(srArr,startingPoint=0){
    for (const e of srArr) {
        startingPoint = startingPoint + e;
      }
      console.log(startingPoint);
    return startingPoint;
}
reduceToTotal(arr)

function reduceToAllTrue(srArr){
    for (const e of srArr){
        if (e === false){
            return false;
        }
    }
    return true
}
let t= reduceToAllTrue(arr);
console.log(t);

function reduceToAnyTrue(srArr){
    for (const e of srArr){
        if (e === true){
            return true;
        }
    }
    return false
}
let n= reduceToAllTrue(arr);
console.log(n);
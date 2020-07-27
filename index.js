// Your code here

function mapToNegativize(sourceArray) {
   return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
   return sourceArray.map(x => x );
}

function mapToDouble(sourceArray) {
   return sourceArray.map(x => x * 2 );
}

function mapToSquare(sourceArray) {
   return sourceArray.map(x => x *  x);
}


function reduceToTotal(sourceArray, startingPoint = 0) {
const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return  startingPoint +  sourceArray.reduce(reducer);

}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc && Boolean(val), true);
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((acc, val) => acc || Boolean(val));
}

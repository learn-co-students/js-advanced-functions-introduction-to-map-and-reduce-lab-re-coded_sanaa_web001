// Your code here
function mapToNegativize(sourceArray) {
  let result = [];
  for(const element in sourceArray) {
    result.push(parseInt(sourceArray[element]) * -1);
  }
  return result;
}

function mapToNoChange(sourceArray) {

  let result = sourceArray;

  return result;
}


function mapToDouble(sourceArray) {
  let result = [];
  for(const element in sourceArray) {
    result.push(parseInt(sourceArray[element]) * 2);
  }
  return result;
}

function mapToSquare(sourceArray) {
  let result = [];
  for(let element in sourceArray) {
    result.push(parseInt(Math.pow(sourceArray[element], 2)));
  }

  return result;
}

function reduceToTotal(sourceArray, start = 0) {
  for(const element in sourceArray) {
    start += parseInt(sourceArray[element]);
  }
  return start;
}

function reduceToAllTrue(sourceArray) {
  for(const element in sourceArray) {
    if(!sourceArray[element]) return false;
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for(const element in sourceArray) {
    if(sourceArray[element]) return true;
  }
  return false;
}

// Your code here

// mapToNegativize returns an array with all values made negative
function mapToNegativize(sourceArray) {
  return sourceArray.map((n) => n * -1);
}

// mapToNoChange returns an array with the original values
function mapToNoChange(sourceArray) {
  return sourceArray.map((n) => n);
}

// mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
  return sourceArray.map((n) => n * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map((n) => n * n);
}

// mapToSquare returns an array with the original values squared
function reduceToTotal(sourceArray, startingPoint) {
  return sourceArray.reduce((total, amount) => total + amount, startingPoint);
}

function reduceToTotal(sourceArray, startingPoint) {
  return sourceArray.reduce((total, amount) => total + amount, startingPoint);
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((total, amount) => total + amount, startingPoint);
  }
  
function reduceToAllTrue(sourceArray) {
  const value = sourceArray.reduce(
    (accumaltor, value) => accumaltor && value,
    true
  );
  if (value !== false) return true;
  else {
      return false;
  }
}


function reduceToAnyTrue(sourceArray) {
  let newValue = sourceArray.reduce(
    (accumaltor, value) => accumaltor || value,
    false
  );
  if (newValue !== false) return true;
  else {
    return false;
  }
}


function reduceToAnyTrue(sourceArray) {
  let newValue = sourceArray.reduce((accumaltor, value) => {
    return accumaltor || value;
  }, false);
  if (newValue != false && newValue != null) {
    return true;
  } else {
    return false;
  }
}

// Your code here
function mapToNegativize(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * -1));
  return newArr;
}

function mapToNoChange(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element));
  return newArr;
}

function mapToDouble(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * 2));
  return newArr;
}

function mapToSquare(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * element));
  return newArr;
}

function reduceToTotal(arr, total = 0) {
  arr.forEach((element) => (total += element));
  return total;
}

const reduceToAllTrue = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) return false;
  }
  return true;
};

const reduceToAnyTrue = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return true;
  }
  return false;
};


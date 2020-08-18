// Your code here
//##My own map-like methods
//mapToNegativize return nagative values of a given array
function mapToNegativize(numbers){
  return numbers.map(negativize);
}
function negativize(number){
  return -number;
}

//mapToNoChange  returnsame values of a given array
function mapToNoChange(array){
  const newArray=[];
   array.forEach(element =>newArray.push(element));
   return newArray;
}
//mapToDouble  return double values of a given array
function mapToDouble(array){
  const newArray=[];
  array.forEach(element =>newArray.push(element*2));
  return newArray
}
//mapToSquare  return squares values of a given array
function mapToSquare(array){
  const newArray=[]
  array.forEach(element =>newArray.push(element*element));
  return newArray;
}


/////my own reduce-like methods //////
//reduceToTotal return total of a given array elements
function reduceToTotal(array,total=0){
   array.forEach(element => total+=element);
   return total;
}
//reduceToAllTrue: returns true if all values true and false if any value is false
function reduceToAllTrue(array){
   let newArray = []
    array.forEach(element => {
            if(!element){
                newArray.push(element)
            }
        });
    if(newArray.length > 0){
        return false
    }
    else{
        return true
    }

}

//reduceToAnyTrue :reduceToAnyTrue returns true when a true value is present
//and returns false when no true value is present

function reduceToAnyTrue(array){
   let newArray = []
    array.forEach(element => {
            if(element){
                newArray.push(element)
            }
        });
    if(newArray.length > 0){
        return true
    }
    else{
        return false
    }
}

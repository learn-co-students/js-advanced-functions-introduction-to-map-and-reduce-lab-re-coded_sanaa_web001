// Your code here

function mapToNegativize(sourceArray){
const newarr =sourceArray.map(
   item=>-1*item
)
return newarr
}
function mapToNoChange(sourceArray){
const newarr =sourceArray.map(
   item=>item
)
return newarr
}
function mapToDouble(sourceArray){
const newarr =sourceArray.map(
   item=>item*2
)
return newarr
}
function mapToSquare(sourceArray){
const newarr =sourceArray.map(
   item=>Math.pow(item,2)
)
return newarr
}

//reduce
function reduceToTotal(sourceArray, startingPoint=0){
   const newarr= sourceArray.reduce(function(calcAll,a){
         return calcAll+a;
      }, startingPoint);
  return newarr;
}
function reduceToAllTrue(sourceArray){
   const newarr= sourceArray.reduce(function(calcAll,a){
         if (calcAll===false){
           return calcAll;
         }
         return Boolean(a)},true)
  return newarr;
}
  
  function reduceToAnyTrue(sourceArray){
   const newarr= sourceArray.reduce(function(calcAll,a){
         if (calcAll===true){
           return calcAll;
         }
         return Boolean(a)},false)
  return newarr;
}
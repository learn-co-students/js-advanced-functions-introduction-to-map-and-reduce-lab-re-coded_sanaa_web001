const array = [1,2,3,4,5];
function mapToNegativize(x){
  let z=[];
  for (let i =0; i<x.length; i++){
    let y = x[i]*-1;
    z.push(y);
  }
  return z;
}
mapToNegativize(array);

function mapToNoChange(x){
  let z=[];
  for (let i =0; i<x.length; i++){
    let y = x[i];
    z.push(y);
  }
  return z;
}

function mapToDouble(x){
  let z=[];
  for (let i =0; i<x.length; i++){
    let y = x[i]*2;
    z.push(y);
  }
  return z;
}

function mapToSquare(x){
  let z=[];
  for (let i =0; i<x.length; i++){
    let y = x[i]**2;
    z.push(y);
  }
  return z;
}

function reduceToTotal(x,y=0){
  for (let i =0; i<x.length; i++){
     y = x[i]+y;
  }
  return y;
}

function reduceToAllTrue(x){
var z=0;
  for (let i =0; i<x.length; i++){
      if(Boolean(x[i])===false)
      return false;
      else z=true;
  }
return z;
}

function reduceToAnyTrue(x){
var z=0;
  for (let i =0; i<x.length; i++){
      if(Boolean(x[i])===true)
      return true;
      else z=false;
  }
return z;
}

   
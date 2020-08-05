// Your code here
let arr=[];
let x=0;
function mapToNegativize(arr)
{
  return arr.map(n=>n * -1);
}

function mapToNoChange(arr)
{
  return arr.map(n=>n);
}

function mapToDouble(arr)
{
  return arr.map(n=>n *2);
}


function mapToSquare(arr)
{
  return arr.map(n=>n *n);
}


function reduceToTotal(arr,x)
{
  return arr.reduce((result, item)  => result + item, x || 0);

}



function reduceToAllTrue(arr)
{
  return arr.reduce((items, value) => items && Boolean(value), true);

}

function reduceToAnyTrue(arr)
{
  return arr.reduce((items, value) => items || Boolean(value), true);

}

function reduceToAnyTrue(arr)
{
  return arr.reduce((items, value) => items || Boolean(value),false);

}

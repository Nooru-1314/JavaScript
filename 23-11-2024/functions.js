//Return the string "Hello, World!"

function hello() {
  return "Hello World!";
}
console.log(hello());
//Write a function double(num) which returns the parameter num times two

function double(num){
    return num*2;
    }
console.log(double(567));
//Write a function and(a, b) that returns true if both a and b are true. Both a and b are guaranteed to be booleans

function and(a,b){
if(a && b){
  return true;
}
  else{
    return false;
  }
}
console.log(and(true,false));

//Write a function and(a, b) that returns true if both a and b are truthy, otherwise return false. a and b could have any type

function and(a,b){
    if(a && b){
    return true;
    }
      else{
        return false;
      }
    }
console.log(and(2,1));

//Write a function or(a, b) that returns true if either a or b or both are true. Both a and b are guaranteed to be booleans

function or(a,b){
    if(a || b)
      return true;
     else
       return false;
    }
console.log(or(0,0));

//Return true if a is smaller than b. Both a and b are numbers.

function smaller(a, b) {
  return a<b;
}
console.log(smaller(7,5));
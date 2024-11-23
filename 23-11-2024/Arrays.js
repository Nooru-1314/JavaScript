//Find the first element in the array which is even (divisible by 2)

const findFirstEven = (arr) => {
  return arr.find(element => element % 2==0);
};
console.log(findFirstEven([1,2,3,4,5,6]));

//Return true if any element of the array is greater than 10

const isLargeArr = (arr) =>{
if(arr.some(element => element > 10)){
    return true;
}
return false;
};
console.log(isLargeArr([12,3,4,5,14]));

//Return true if every item in the array is equal to "a"

const isEverya = (arr) => {
return arr.every(element => element == 'a');
};
console.log(isEverya(['e','a','c','d','e']));

//Find the index of the first element which starts with "a"

const findAWordIndex = (arr) => {
return arr.findIndex(element => element.startsWith('a'));
};
console.log(findAWordIndex(["carrot", "apple","banana"]));

//Double the value of each element

const doubleEach = (arr) => {
return arr.map(element => element *2);
};
console.log(doubleEach([1,2,3,4,5]));

//Use the reduce function to return the sum of all the values in the array

const sumAll = (arr) => {
return arr.reduce((acc,curr) => acc + curr)
};
console.log(sumAll([1,2,3,,4,5]));

//Use flatMap to insert a 0 element after every other element

const insertZeros = (arr) => {
  return arr.flatMap(value => [value,0]);
};
console.log(insertZeros([1,2,3,4,5]));

//Create a new array named arr of length 100 where each element has the value 0

const fill = new Array(100).fill(0);
console.log(fill[34]);

//Create a new array named arr of length 100 where each element is a string of format 00001, 00002, etc

const arrTostr = new Array(100);
for(let i=0;i<arrTostr.length;i++){
  arrTostr[i] = (i+1).toString().padStart(5,'0');
}
console.log(arrTostr[7]);
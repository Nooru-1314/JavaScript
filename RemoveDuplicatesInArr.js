function RemoveDuplicates(array){
    let result = [];
    for(let i=0;i<array.length;i++){
            if(!result.includes(array[i])){
                result.push(array[i]);
            }
        }
    return result;
}
console.log(RemoveDuplicates([2,3,4,5,2,6,7,9,3]));
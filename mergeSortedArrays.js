function mergedArray(arr1, arr2){
    let merged = [];
    let i=0;j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i]);
        }
    }
    while(i<arr1.length){
        merged.push(arr1[i]);
    }
    while(j<arr2.length){
        merged.push(arr2[j])
    }
    return merged;
}
console.log(mergedArray([2,3,4,5,1]))
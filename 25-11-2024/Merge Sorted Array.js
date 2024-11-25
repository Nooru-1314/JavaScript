var Merge = (arr1, arr2)=>{
    let i=0,j=0;
    let sorted = [];
    while(i<arr1.length && j< arr2.length){
        if(arr1[i]< arr2[j])
        {
            sorted.push(arr1[i]);
            i++;
        }
        else{
            sorted.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        sorted.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        sorted.push(arr2[j]);
        j++;
    }
    return sorted;
}
console.log(Merge([1,2,3,0,0,0],[2,5,6]));
var subArr = (arr)=>{
    let subarrays = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            subarrays.push(arr.slice(i,j + 1));
        }
    }
    return subarrays;
}
console.log(subArr([1,2,3,4,5]));
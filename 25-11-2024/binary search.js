var BinarySearch = (arr,val)=>{
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===val){
            return mid;
        }
        else if(arr[mid]<val){
            left = mid + 1;
        }
        else{
            right = mid -1;
        }
        
    }
    return left;
}
console.log(BinarySearch([1,2,3,4,5],4));
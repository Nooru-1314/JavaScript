var search = (nums,val)=>{
    let left = 0, right = nums.length-1;
    while(left<=right){
        let mid= Math.floor((left + right)/2);
    if(nums[mid]===val){
        return mid;
    }
    else if(nums[mid]< val){
        left = mid +1;
    }
    else{
        right = mid -1;
    }
}
return left;    

}
console.log(search([1,3,5,6,],2));

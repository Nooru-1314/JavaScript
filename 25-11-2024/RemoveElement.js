var removeDuplicates = function(nums){
    if(nums.length===0){
        return 0;
    }
    let i=1;
    for(let j=1;j<nums.length;j++){
        if(nums[j]!==nums[j-1]){
            nums[i]=  nums[j];
            i++;
        }
    }
    return i;
};
const nums = [0,0,1,1,1,2,2,3,3,4];
const k = removeDuplicates(nums);
console.log(k); 
console.log(nums);
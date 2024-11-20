function containsValue(array, element){
    for(let i=0;i<array.length;i++){
        if(array[i]===element){
            return "present";
        }
    }
            return "Not Present";
}
console.log(containsValue([2,3,4,5,6],5));
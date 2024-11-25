var mostFreq = (arr)=>{
    let obj = {};
    let maxFreq = 0;
    let mostFreqItem;
    arr.forEach(item=>{
            obj[item] = (obj[item] || 0) + 1;
            if(obj[item]>maxFreq){
                maxFreq = obj[item];
                mostFreqItem = item;  
            }  
    });
    return mostFreqItem;
}
console.log(mostFreq([1,1,2,3,4,4,4,5]));
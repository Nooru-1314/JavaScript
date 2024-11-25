var WordOccurance = (str) =>{
    let words = str.split(" ");
    let result = {};
    for(let word of words){
        if(result[word] ===undefined){
            result[word] = 1;
        }
        else{
            result[word]++;
        }
    }
    return result;
}
console.log(WordOccurance("hello hello world and hello john"));
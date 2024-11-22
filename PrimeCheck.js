function Primes(arr){
    let primes = [];
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            primes.push(arr[i]);
        }
    }
    return primes;
}
function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i*i<=num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
console.log(Primes([1,2,3,4,5,6,7]));
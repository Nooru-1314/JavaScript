//Given an integer x, return true if x is a palindrome, and false otherwise.

var PalinNum =(num) =>{
    let reversed = 0;
    while(num>0){
        let lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        num = Math.floor(num/10);
    }
        return reversed;

}

console.log(PalinNum(12345));
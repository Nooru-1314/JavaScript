function area(r){
    return Math.PI * r * r;
    }

function round100(num){
    let n = Math.round(num/100) * 100;
        return n;
    }

function dice(){
    let x = Math.random()*6;
        return Math.ceil(x);
    }
//NAND operator
function nand(b1, b2){
    if(b1 && b2){
        return false;
    }
    else{
        return true;
    }
}
console.log(nand(true, true));
//NOR operator

function nor(b1, b2){
    if(! (b1 || b2))
    return true;
    else
    return false;
    
    }
    console.log(nor(false, false));

//XOR operator
function xor(b1, b2){
    if(b1!=b2){
    return true;
    }
    else {
    return false;
    }
    }
    console.log(xor(true,false));

//Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.

function isThreeDigit(num){
    if(num>=100 && num <1000){
        return true;
    }
    else{
        return false;
        }
    }
//Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.

function equals(num1, num2){
    if(num1===num2){
    return "EQUAL";
    }
    else{
    return "UNEQUAL";
    }
    }

//Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

function repdigit(num){
    let ones = num % 10;
    let tens = Math.floor(num / 10);
    if(ones == tens){
    return 'Repdigit!';
    }
    return 'No Repdigit!';
    }


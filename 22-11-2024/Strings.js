function greet(str){
    return "Hello " + str+ "!";
    }
    greet("Grace");

function shout(str){
    let result = str+str;
    console.log(result);
    return result;
}

function length(str){
    return str.length;
    }

function toCase(str){
    return str.toLowerCase() + '-' + str.toUpperCase();
    }

function shortcut(s1, s2){
    return s1.charAt(0) + s2.charAt(0);
    }

//Write a function firstChar, which returns the first character that is not a space when a string is passed.

function firstChar(str){
    let name = str.trim();
    return name.charAt(0);
    }

function indexOfIgnoreCase(str1, str2){
    let n1 = str1.toLowerCase();
    let n2 = str2.toLowerCase();
    let result = n1.indexOf(n2);
    return result;
    }
function secondIndexOf(s1, s2){
    let firstIndex = s1.indexOf(s2);
    return s1.indexOf(s2, firstIndex +1);
    }
function firstWord(str){
    let words = str.split(' ');
    return words[0];
    }
    

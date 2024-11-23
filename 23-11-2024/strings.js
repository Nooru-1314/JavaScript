//Return the 2nd character in the input string str

const secondChar = (str) => {
    if(str.length!==0)
      return str.charAt(1);
    else
      return undefined;
  };
  console.log(secondChar("hello"));

//Return true if the input string ends with the phrase ok?

const endsWithOk = (str) => {
if(str.endsWith("ok?")){
   return true;
  }
else{
return false;
}};
console.log(endsWithOk("Are you ok?"));

//Return true if the input string includes the string "ee"

const hasEes = (str) =>{ 
if(str.includes("ee")){
  return true;
}
  else{
    return false;
  }
  };
  console.log(hasEes("valunteer"));

//Return the index of the first "x" in the input string. -1 if not found.

  const indexOfFirstX = (str) => {
  return str.indexOf('x');
  };
  console.log(indexOfFirstX("x axis"));

//Return true if the input string includes the character "x"

  const hasX = (str) => {
  if(str.includes('x'))
  return true;
  else{
    return false;
  }};
console.log(hasX("variable"));
//Return the 3rd through 6th characters (inclusive) of the input string

  const getPart = (str) => {
  return str.substring(2,6);
  };
  console.log(getPart("abcdefg"));

//Return a substring starting with the character at index 2 through the end of the string

const withoutHead = (str) =>{ 
return str.substring(2);
};
console.log(withoutHead("Introduction"));
//Return a substring including everything except the first and last character.

const withoutEnds = (str) => {
return str.substring(1,str.length-1);
};
console.log(withoutEnds("java"));

//Return the second half of the input string. For odd lengths, don't include the middle character (ex: the last 2 characters of a 5 character string)

const grabSecondHalf = (str) =>{
  let n = str.length;
if(n % 2 ===0){
  return str.substring(Math.floor(n/2),n);
}
  else{
    return str.substring(n/2 + 1,n);
  }
};
console.log(grabSecondHalf("programming"));

//Create a string str from the character codes 87, 111, 119 using the fromCharCode method

const str = String.fromCharCode(87,111,119);
console.log(str);

//Return a string of dots "...." with a length equal to length

const dots = (length) =>{
    return '.'.repeat(length);
};
console.log(dots(7));

//Pad the input string with leading 0s so it has at least 5 characters

const padstart = (str) =>{
    return str.padStart(5,'0');
};
console.log(padstart("hel"));

//Return a string like "helllo" with ellCount number of L characters

const lcount = (llcount)=>{
    return `he${'l'.repeat(llcount)}o`;
}
console.log(lcount(4));


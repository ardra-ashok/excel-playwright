// reverse a string

function reverseString(str) {
 let splitString = str.split('');

 splitString.reverse();

 str = splitString.join('');

 return str;


}

console.log(reverseString('hello'));


// factorial of a num
function FirstFactorial(num) { 

  // code goes here  
 let fact =1;

 for (i = 1; i <= num; i++){
  fact *= i;
 }
 num = fact;
  return num; 

}
console.log(FirstFactorial(4));

// longest word challenge
function LongestWord(sen) {
  // code goes here
 let newString = sen.split();
 
 
 let maxWord = '';
 newString.forEach(word => {
  if (word.length > maxWord.length)
  
  maxWord = word;
 });
 sen = maxWord;
  return sen
}

// keep this function call here
console.log(LongestWord('fun&!! time'))

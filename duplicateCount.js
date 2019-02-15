/*Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. The input 
string can be assumed to contain only alphabets (both 
  uppercase and lowercase) and numeric digits.
*/


function duplicateCount(text){
 let arr = text.toLowerCase().split('');

 let countDuplicate = 0;
 let str = '';

 for (let i = 0; i < arr.length; i++) {
    if (str === '') {
      str += arr.splice(i, 1);
    }
    for (let j = 0; j < arr.length; j++) {
      if (str.indexOf(arr[j]) !== -1) {
        str += arr.splice(j, 1);
        j--;
      }
    }

    if (str.length > 1) countDuplicate++;
    str = '';
    i--;
 }
 return countDuplicate;
}
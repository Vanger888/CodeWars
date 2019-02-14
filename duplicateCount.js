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
function encrypt(text, n) {
  let textEncript = text;
  if (textEncript) {
    let arrFirst = [];
    let arrSec = [];
    for (let i = 0; i < n; i++ ) {
      for (let i = 0; i < textEncript.length; i++) {
        i++;
        arrFirst.push(textEncript[i]);
        arrSec.push(textEncript[i - 1]);
      }
      textEncript = arrFirst.join('') + arrSec.join('');
      arrFirst = [];
      arrSec = [];
    }
  }
  return textEncript;
}

function decrypt(encryptedText, n) {
  if (encryptedText) {
    let decryptArr = encryptedText.split('');
    let tempArr = [];
    for (let i = 0; i < n; i++) {
      for(let i = 0; i < Math.floor(decryptArr.length / 2); i++) {
        tempArr.push(decryptArr[Math.floor(decryptArr.length / 2) + i]);
        tempArr.push(decryptArr[i]);
      }
      if (decryptArr.length % 2) {
        tempArr.push(decryptArr[decryptArr.length - 1]);
      }
      decryptArr = tempArr.slice();
      tempArr = [];
    }
    return decryptArr.join('');
  }
  return encryptedText;
}

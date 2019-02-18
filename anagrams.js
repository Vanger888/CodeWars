function anagrams(word, words) {
  let result = [];

  function sortToCompare(word) {
    return word.toLowerCase().split('').sort();
  }

  const example = sortToCompare(word);

  for (let i = 0; i < words.length; i++) {

    let temp = sortToCompare(words[i]);
    let isAnagram = true;

    for (let j = 0; j < temp.length; j++) {
      if (example[j] !== temp[j]) {
        isAnagram = false;
        break;
      }
    }
    if (isAnagram) result.push(words[i]);
  }
  return result;
}
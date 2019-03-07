function permutations(string) {
  const keysObj = {};
  let permArr = [];
  let n = '';

  for (let i = 0; i < string.length; i++) {
    keysObj[(i + 1).toString()] = string[i];
    n += i + 1;
  }

  for (let i = +n; i <= string.length * +n; i++) {

    const keys = i.toString().split('');
    if (!keys.every((item, i) => keys.lastIndexOf(item) === i)) continue;

    let state = false;

    for(let i = string.length; i > 0; i--) {
      if (!keysObj[keys[i-1]]) {
        state = false;
        break;
      } else state = true;
    }

    if (state) {
      let item = '';
      for(let i = 0 ; i < string.length; i++) {
        item += keysObj[keys[i]];
      }
      permArr.push(item);
    }
  }
  permArr = permArr.filter((function(item, i) {
    if (permArr.lastIndexOf(item) !== i) {
      return false;
    } else return true;
  }));

  return permArr;
}
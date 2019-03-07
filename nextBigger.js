function nextBigger(n){
  let bigger = n.toString().split('');
  let mutable = '';
  for (let i = bigger.length - 1; i > 0; i--) {
    if (bigger[i] > bigger[i - 1]) {
      mutable = bigger.splice(i - 1);
        let nextMin = mutable.splice(mutable.indexOf((Math.min(...mutable.filter((item) => 
        item > mutable[0]))).toString()), 1);

        mutable = nextMin + mutable.sort((a, b) => a - b).join('');
      break;
    }
  }
  return +(bigger.join('') + mutable) === n ? -1 : +(bigger.join('') + mutable);
}
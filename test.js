function birthdayCakeCandles(ar) {
  let bigCandle = ar.sort((a, b) => a - b);
  const longCandle = bigCandle.reverse()[0];
  const uniqueList = bigCandle.reduce((countWords, word) => {
    countWords[word] = ++countWords[word] || 1;
    return countWords;
  }, {});

  return uniqueList[longCandle];
}
//let arr = duplicateArrayElements(ar)
//   function duplicateArrayElements(array) {
//     return array.reduce(function(acc, el, i, arr) {
//       if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
//       return acc;
//     }, []);
//   }

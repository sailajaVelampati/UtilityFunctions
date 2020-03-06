function assendingArray() {
  var array = [3, 6, 2, 56, 32, 5, 89, 32];
  array = duplicateArrayElements(array);
  return array.sort((a, b) => a - b).reverse()[0];
}

function duplicateArrayElements(array) {
  return array.reduce(function(acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
    return acc;
  }, []);
}

function arrayReverse(a) {
  return a.reverse();
}

function uniqueEntiresList(inputWords) {
  const inputWords = [
    "a",
    "b",
    "c",
    "d",
    "d",
    "e",
    "a",
    "b",
    "c",
    "f",
    "g",
    "h",
    "h",
    "h",
    "e",
    "a"
  ];
  return inputWords.reduce((countWords, word) => {
    countWords[word] = ++countWords[word] || 1;
    return countWords;
  }, {});
}

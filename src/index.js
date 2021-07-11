
exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    let numMin = array[0];
    for (let i = 1; i <= array.length; i++) {
      if (numMin > array[i]) {
      numMin = array[i];
      }
  }
    return numMin;
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    let numMax = array[0];
    for (let i = 1; i <= array.length; i++) {
      if (numMax < array[i]) {
      numMax = array[i];
      } 
    }
      return numMax;
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
  sum += array[i];
  }
  return sum/array.length;
  }
}

module.exports = function(array) {
  if (!array || !array.length || typeof array !== 'object') {
    console.error('Unable to shuffle empty or missing array.');
    return;
  }
  let j, temp;
  for (let i = 0; i < array.length; i++) {
    j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

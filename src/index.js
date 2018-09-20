module.exports = function longestConsecutiveLength(array) {
  if (array.length < 2) return array.length

  array.sort((a,b)=>a-b)  

  let result=1, currentLongest=1;

  for (let i=1; i<array.length-1; i++){
    if (array[i] == array[i-1]+1){
      currentLongest++;
    } else if (array[i] == array[i-1]) {
      continue;
    } else {
      if (currentLongest > result) {result = currentLongest};
      currentLongest = 1;
    }
  }

  return Math.max(result, currentLongest)  
}

function countNegatives(arr) {
  // Validate the input:
  // 1. Array.isArray(arr) ensures the input is actually an array (not null, undefined, or another type).
  // 2. arr.every(Number.isFinite) checks that every element in the array is a valid finite number
  //    (excludes strings, NaN, Infinity, etc.).
  // If either condition fails, the input is considered invalid.
  if (!Array.isArray(arr) || !arr.every(Number.isFinite)) {
      return false; 
  }
    
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

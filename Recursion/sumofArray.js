// Recursion Formula sumOfArr(nums) = nums[i] + sumOfArr(nums); 


let arr = [5, 3, 2, 0, 1];
let n = arr.length-1;

function sumOfArr(nums, i) {
    if (i === 0) {
        return nums[0];
    }

    return nums[i] + sumOfArr(nums, i - 1);
}

console.log(sumOfArr(arr, n));
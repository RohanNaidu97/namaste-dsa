// Question Description:
// Write a JavaScript function that finds the largest number in a given array. The function should examine all elements in the array and return the maximum value.

let arr = [12, -3, 7, 0, 25, -11, 4, 9];

function findLargest(nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}


console.log(findLargest(arr));
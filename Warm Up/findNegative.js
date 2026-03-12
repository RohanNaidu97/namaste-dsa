// Question Description:
// Write a JavaScript function that counts how many negative numbers are present in a given array. The function should return the total number of negative values in the array.

let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegatives(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            count++;
        }
    }


    return count;
}


console.log(countNegatives(arr));
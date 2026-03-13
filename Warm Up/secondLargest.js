let arr = [4, 9, 0, 2, 8, 7, 1];

function secondLargest(nums) {
    let max = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] > max) {
            max = nums[i];
        }

        if (nums[i] > second && nums[i] < max) {
            second = nums[i];
        }
    }
    return second;
}

console.log(secondLargest(arr));


function secondLarge(nums) {
     nums = [...nums]; // create a shallow copy so sorting doesn't modify the original array (arr)
    nums.sort((a, b) => a - b);

    for (let i = nums.length - 1; i > -1; i--){
        if (nums[i] !== nums[i - 1])
            return nums[i-1];
    }

    return -1;
}

console.log(secondLarge(arr));
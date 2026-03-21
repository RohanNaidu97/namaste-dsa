let nArray = [1, 1, 0, 1, 1, 1];



var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        }

        else if (nums[i] === 0) {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }

    return maxCount = Math.max(maxCount, count);
};

console.log(findMaxConsecutiveOnes(nArray));
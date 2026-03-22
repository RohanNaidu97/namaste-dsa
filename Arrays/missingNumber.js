let nArray = [9, 6, 4, 2, 3, 5, 7, 0, 1];



var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return nums.length;
};


console.log(missingNumber(nArray));


var missingNumber = function(nums) {
    let n = nums.length;

    let triangular = (n * (n + 1)) / 2;

    const sum = nums.reduce((acc, curr) => acc + curr, 0);

    return triangular-sum;
};

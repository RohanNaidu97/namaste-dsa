let n = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
    let newNum = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== nums[i + 1]) {
            newNum.push(nums[i]);
        }
    }
    return newNum;
};

console.log(removeDuplicates(n));
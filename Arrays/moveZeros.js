let nArray = [0, 1, 0, 3, 12];


var moveZeroes = function(nums) {
    let pointer = 0;

    for(let num of nums){
        if(num !== 0){
            nums[pointer] = num;
            pointer++;
        }
    }

    nums.fill(0, pointer, nums.length);

    return nums;
};

console.log(moveZeroes(nArray));
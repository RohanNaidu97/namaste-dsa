// Brute Force
// var singleNumber = function(nums) {
//     let nCopy = [];

//     let sum = 0;

//     for (let i = 0; i < nums.length; i++){
//         if (nCopy.includes(nums[i])) {
//             sum = sum - nums[i];
//         }
//         else {
//             sum = sum + nums[i];
//             nCopy.push(nums[i]);
//         }
//     }

//     return sum;
// };

// let n = [2, 2, 1];

let n = [4, 1, 2, 1, 2];

var singleNumber = function(nums) {
    let nCopy = {};

    for (let i = 0; i < nums.length; i++){
        if (!nCopy[nums[i]]) {
            nCopy[nums[i]] = 1;
        }

        else {
            nCopy[nums[i]]++;
        }
    }

    for (let i = 0; i < nums.length; i++){
        if (nCopy[nums[i]] === 1) {
            return nums[i];
        }
    }


    
};

console.log(singleNumber(n));
// This file contains both approach with loop and with recursive calls.
// Remember that you did recursion on your own and it should be done on your own.

let arr = [1, 3, 5, 7, 9, 11, 15];

let element = 3;

let l = 0;

let r = arr.length-1;

function binarySearch(nums, left, right, item){
    // base case when left > right

    if(left>right){
        return -1;
    }

    // base case is when mid == item

    let mid = Math.floor( (left+right)/2 );

    if(item === nums[mid]){
        return mid;
    }

    // if item < mid right = mid

    if(item < nums[mid]){
        right = mid;
        return binarySearch(nums, left, right, item);
    }

    // if item > mid left = mid

    if(item > nums[mid]){
        left = mid;
        return binarySearch(nums, left, right, item);
    }
}


console.log(binarySearch(arr, l, r, element));




var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;

    while(left <= right){
        let mid = Math.floor( (left+right)/2 );

        if(nums[mid] === target){
            return mid;
        }

        else if(target < nums[mid]){
            right = mid - 1;
        }

        else{
            left = mid + 1;
        }
    }

    return -1;
};
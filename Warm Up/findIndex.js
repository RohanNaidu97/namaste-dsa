// Question Description:
// Write a JavaScript function that searches for a specific element in an array. The function should return the index of the element if it exists, and -1 if the element is not found in the array.


let arr = [4, 2, 0, 10, 8, 30];

function searchElement(nums, element) {

    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] === element) {
            return i;
        }
    }


        return -1;
}


console.log(searchElement(arr, 30));
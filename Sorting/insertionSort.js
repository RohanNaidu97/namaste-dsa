let arr = [2, 33, 43, 11, 61];

function insertionSort(nums){
    
    for(let i = 1; i < nums.length; i++){

        let curr = nums[i];
        let prev = i-1;

        while(nums[prev] > curr && prev >= 0){
            a[prev + 1] =  a[prev];
            prev--;
        }

        a[prev + 1] = curr;
    }
    
    return nums;
}


console.log(insertionSort(arr));
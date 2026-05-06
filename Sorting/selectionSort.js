let arr = [2, 33, 43, 11, 61];

function selectionSort(nums){
    
    for(let i = 0; i < nums.length-1; i++){
        let min = 1;

        for(let j = i+1; j < nums.length-1; j++){
            if(nums[j] < arr[min]){
                min = j;
            }
        }

        if( min !== i){
            let temp = nums[min];
            nums[min] = nums[i];
            nums[i] = temp;
        }
    }

    return nums;
}


console.log(selectionSort(arr));
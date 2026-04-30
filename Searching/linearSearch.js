let nums = [ 2, 55, 64, 8, 11, 90];

let element = 64;

function linearSearch(arr, target){


    for(let i = 0; i < arr.length -1; i++){
        if(arr[i] === target){
            return i;
        }
    }
}


console.log(linearSearch(nums, element));


let arr = [5, 3, 2, 0, 1];
let n = arr.length - 1;

function sumOfOdd(num, i) {
    if (i === 0) {
        return num[0];
    }

    if (num[i] % 2 == 0) {
        return sumOfOdd(num, i - 1);
    }

    else {
        return num[i] + sumOfOdd(num, i - 1);
    }
}


console.log(sumOfOdd(arr, n));
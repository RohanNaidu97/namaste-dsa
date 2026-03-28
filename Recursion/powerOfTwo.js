let num = 8;

var isPowerOfTwo = function (n) {
    if (n === 1) {
        return true;
    }

    if (n % 2 !== 0 || n < 1) {
        return false;
    }

    else return isPowerOfTwo(n / 2);

};

console.log(isPowerOfTwo(num));
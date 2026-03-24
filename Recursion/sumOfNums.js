function sumOfN(num, r) {
    if (num > r) {
        return 0;
    }

    return num + sumOfN(num + 1, r);
}

console.log(sumOfN(1, 10));
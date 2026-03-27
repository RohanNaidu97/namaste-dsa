// Recursion Formula fact(n) = n * fact(n-1);


let num = 5;

function fact(n) {
    if (n === 1) {
        return 1;
    }

    return n * fact(n - 1);
}

console.log(fact(num));
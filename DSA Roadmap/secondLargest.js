let str = "dfa12321afd";

var secondHighest = function (s) {
    let numbers = s
        .split("")
        .filter(ch => !isNaN(ch) && ch !== " ");

    numbers.sort((a, b) => a - b);

    for (let i = numbers.length - 1; i > 0; i--) {
        if (numbers[i] !== numbers[i - 1]) {
            return numbers[i - 1];
        }
    }

    return -1;
};


console.log(secondHighest(str)); 

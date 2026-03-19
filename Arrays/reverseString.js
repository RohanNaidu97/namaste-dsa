let s = ["h", "e", "l", "l", "o"]


var reverseString = function (s) {
    let k = s.length-1;
    let swStr = "";
    for (let i = 0; i < k; i++) {
        swStr = s[i];
        s[i] = s[k];
        s[k] = swStr;

        k--;
    }
    return s;
};

console.log(reverseString(s));
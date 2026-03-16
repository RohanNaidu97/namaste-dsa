let x =1221

function palindromeNumber(x) {
    let xCopy = x;
    let rev = 0;

    if (x < 0) return false;

    while (x > 0) {
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x = Math.floor(x / 10);
    }

    if(xCopy === rev){
        return true;
    }
    else{
        return false;
    }

    return xCopy === rev;

}


// console.log(xCopy === rev);

// console.log(rev);
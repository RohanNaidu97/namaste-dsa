var isPowerOfTwo = function(n) {
    if ( n === 1)
        return true;

    let powOfTwo = 1;

    let flag = 2;

    while(flag <= n){
        if( flag === n){
            return true;
        }

        flag = Math.pow(2,powOfTwo);
        powOfTwo++;
    }

    return false;
};
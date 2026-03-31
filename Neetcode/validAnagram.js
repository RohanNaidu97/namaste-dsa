var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let arr = s.split("");

    for( let i = 0; i < s.length; i++){
       let index = arr.indexOf(t[i]);
        if (index === -1) return false;
        arr.splice(index, 1);
    }

    if(arr.length === 0){
        return true;
    }

    else{
        return false;
    }
};
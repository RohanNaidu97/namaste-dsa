let num1 = [1, 2, 3, 0, 0, 0], p = 3, num2 = [2, 5, 6], q = 3;

// let num1 = [1], p = 1, num2 = [], q = 0;

// let num1 = [0], p = 0, num2 = [1], q = 1;

// let num1 = [2,0], p = 1, num2 = [1], q = 1;


var merge = function (nums1, m, nums2, n) {
    let newArr = [...nums1];
    let x = 0;
    let y = 0;
    for (let i = 0; i < m + n; i++) {
        console.log("loop");

        if ((newArr[x] <= nums2[y] && x < m) || y >= n) {
            nums1[i] = newArr[x];
            console.log("first " + newArr[x]);
            x++;
        }

        else if (newArr[x] > nums2[y] || x >= m) {
            nums1[i] = nums2[y];
            console.log("second " + nums2[y]);
            y++;
        }

        else if (n === 0) {
            return nums1;
        }
    }

    // nums1 = [...newArr];
    return nums1;
};


console.log(merge(num1, p, num2, q));


var merge = function(nums1, m, nums2, n) {
    let newNums1 = nums1.slice(0,m);
    let p = 0;
    let q = 0;

    for(let i=0; i < m+n; i++){
        if( q >= n || (p<m && newNums1[p] < nums2[q])){
            nums1[i] = newNums1[p];
            p++;
        }

        else{
            nums1[i] = nums2[q];
            q++;
        }
    }
};


var merge = function (nums1, m, nums2, n) {
    let x = m-1;
    let y = n - 1;

    for (let i = m + n - 1; i >= 0; i--){
        if (y < 0) {
            break;
        }

        if (nums1[x] > nums2[y] && x >= 0) {
            nums1[i] = nums1[x];
            x--;
        }

        else {
            nums1[i] = nums2[y];
            y--;
        }
    }

    return nums1;

};
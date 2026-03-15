let n = 5;

for (let i = n; i > 0; i--){
    let row = "";
    for (let j = 0; j <= n; j++){
        
        if (j >= i) {
            row = row + "*";
        }
        else {
            row = row + " ";
        }
    }
    console.log(row);
}


for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n-(i+1); j++){
        row = row + " ";
    }
    for (let k = 0; k < i+1; k++){
        row = row + "*";
    }
    console.log(row);
}


//     *
//    **
//   ***
//  ****
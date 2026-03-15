let n = 5;

for (let i = 0; i < n; i++){
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++){
        row += toggle;
        if (toggle) {
            toggle = 0;
        }
        else {
            toggle = 1;
        }
    }
    console.log(row);
}
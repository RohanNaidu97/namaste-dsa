function sum(...args) {
    let num = [...args];

    return num.reduce((total, n) => total + n, 0);
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum
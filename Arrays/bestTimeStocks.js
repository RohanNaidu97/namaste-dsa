let pr = [7, 1, 5, 3, 6, 4]


var maxProfit = function (prices) {
    let x = 0;
    let y = prices.length - 1;
    // let n = Math.floor(prices.length);
    let n = Math.floor(prices.length);

    for (let i = 0; i < n/2; i++){
        let max = 0;
        if (prices[n - i - 1] - prices[i] > max) {
            max = prices[n - i - 1] - prices[i];
        }
    }
    return max;
};


console.log(maxProfit(pr));


var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};
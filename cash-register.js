const currencyValue = {
    "PENNY" : 1,
    "NICKEL" : 5,
    "DIME" : 10,
    "QUARTER" : 25,
    "ONE" : 100,
    "FIVE" : 500,
    "TEN" : 1000,
    "TWENTY" : 2000,
    "HUNDRED" : 10000
  }

function checkCashRegister(price, cash, cid) {
    let change = [];
    let status = '';
    let changeTotal = cash * 100 - price * 100;
    let changeTotalCheck = changeTotal;

    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

    filteredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while (changeTotal >= currencyValue[curr] && currSum > 0) {
        amount += currencyValue[curr];
        changeTotal -= currencyValue[curr];
        currSum -= currencyValue[curr]; 
        }
        if (amount !== 0) {
        change.push([curr, amount / 100]);
        }
    });

    if (changeTotal > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (changeTotal == 0 && changeTotalCheck == cidSum) {
        status = 'CLOSED';
        change = cid;
    } else {
        status = 'OPEN';
    }

    return {'status': status, 'change': change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
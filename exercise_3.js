const getSum = firstNum => {
    return function (secondNum) {
        return firstNum + secondNum;
    }
}

console.log(getSum(7)(8));
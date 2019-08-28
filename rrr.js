function superRoot(number) {
    let actualEval = 0.0000001;
    while (true) {
        let newEval = newtonMethod(actualEval, number);
        console.log(actualEval)
        if (actualEval > newEval + 0.0000001 || actualEval < newEval - 0.0000001)
            actualEval = newEval;
        else return newEval
    }
}

function newtonMethod(actualEval, number) {
    return actualEval - (actualEval ** actualEval - number) / ((Math.log(actualEval) + 1) * actualEval ** actualEval);
}


function checkResult(func, number) {
    var result = func(number);
    var p = result ** result;
    if (number - 0.001 < p && p < number + 0.001) {
        return true
    } else {
        return false
    }
};

console.log(checkResult(superRoot, 10000000000));

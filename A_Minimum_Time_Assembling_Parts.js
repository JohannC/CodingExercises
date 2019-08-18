function minimumTime(numOfParts, parts) {
    timeSpent = [];
    sortedParts = parts.slice().sort((a, b) => a - b);
    while (sortedParts.length > 1 ){
        const newPart = combine(sortedParts.shift(), sortedParts.shift());
        const indexToStoreNewPart = sortedParts.findIndex(part => newPart < part);
        sortedParts.splice(indexToStoreNewPart, 0, newPart);
        timeSpent.push(newPart);
    }
    //return timeSpent.reduce((acc, time) => acc += time, 0);
    console.log(timeSpent.reduce((acc, time) => acc += time, 0));
}


function combine(part1, part2) {
    return part1 + part2;
}

minimumTime(6, [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10, 35, 89])

function minimumTimeNonOptimized(numOfParts, parts){
    timeSpent = [];
    sortedParts = parts.slice().sort((a, b) => a - b);
    sortedParts.reduce((acc, part) => {
        if (acc.length === 0) return [part];
        else {
            const newPart = combine(acc.pop(), part)
            timeSpent.push(newPart);
            return [newPart];
        }
    }, [])
    //return timeSpent.reduce((acc, time) => acc+=time, 0);
    console.log(timeSpent.reduce((acc, time) => acc += time, 0));
}
function isAnagram(str1, str2) {
    let counter = new Map();
    str1.split("").map(char => count(counter, char));
    str2.split("").map(char => count(counter, char));
    for ([key, value] of counter) {
        if (value !== 2) return false;
    }
    return true;
}

function count(counter, char) {
    if (counter.get(char) === undefined) counter.set(char, 1)
    else {
        let i = counter.get(char);
        counter.set(char, ++i);
    }
}

console.log(isAnagram("marion", "manoir"))

//["marion", "manoir", "minora", "adonner", "donnera", "redonna", "croupie", "poucier", "copieur"];

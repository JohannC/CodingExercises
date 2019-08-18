//Facebook - Rearrange a string

function arrange(string) {
    let stringArray = string.split("");
    codeLetterArray = stringArray.filter(char => char.charCodeAt(0) >= 65).map(char => char.charCodeAt(0));
    codeNumberArray = stringArray.filter(char => char.charCodeAt(0) < 65).map(char => char.charCodeAt(0));
    codeLetterArray.sort((a, b) => a - b);
    codeNumberArray.sort((a, b) => a - b);
    return [...codeLetterArray, ...codeNumberArray].map(char => String.fromCharCode(char)).join("");
}

console.log(arrange("AC2BEW3"));
console.log(arrange("ACCBA10D2EW30"));
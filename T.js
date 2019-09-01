function countNbBinary1s(A, B) {
    let num = A * B;
    return (num >>> 0).toString(2).split("").filter(x => x === "1").length;
}
/*function solution(A, B) {
    let num = A * B;
    let bitcounter = 0;
    for (let i = 0; i < 32; i++) {
        if(getBit(num, i)) ++bitcounter;
    }
    return bitcounter;
}

function getBit(num, i){
    return ((num & (1<<i)) != 0);
}*/

function nextdozen(N) {
   return N + 10 - N % 10;
}

// function solution(S){
//     let nbTripeAs = S.match(/aaa/g);
//     let nbTripeBs = S.match(/bbb/g);
//     return nbTripeAs.length + nbTripeBs.length;
// }

function numberOfLetterReplaceToRemoveTripleAOrTripleB(S){
    let counter = 0;
    let tripleAs = new RegExp('aaa', 'g')
    let tripeBs = new RegExp('bbb', 'g');
    while ((array1 = tripleAs.exec(S)) !== null) {
        counter++;
    }
    while ((array2 = tripeBs.exec(S)) !== null) {
        counter++;
    }
    return counter;
}

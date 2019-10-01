function longestSubarrayWhoseSumIsEqualTo0(arr) {
    const sumToIndex = new Map();
    let startIndex = 0
    let endIndex = 0
    arr.reduce((acc, x, i) => {
        let sum = acc + x
        if (sum === 0 && i > (endIndex - startIndex - 1)) {
            startIndex = 0;
            endIndex = i;
        } else{
            if (sumToIndex.has(sum)) {
                let j = sumToIndex.get(sum)
                if (i - j > endIndex - startIndex) {
                    startIndex = j;
                    endIndex = i;
                }
            } else sumToIndex.set(sum, i + 1);
        }
        return sum
    },0);
    if (endIndex === 0) return "Impossible";
    else return "from "+startIndex + " to " + endIndex + " - size is "+(endIndex - startIndex + 1);
}

let arr = [1, 1, 1, 1, -1, -1, 1, -1, 1, 1];
console.log(longestSubarrayWhoseSumIsEqualTo0(arr));
arr = [1, -1, -1, 1, -1, 1, 1];
console.log(longestSubarrayWhoseSumIsEqualTo0(arr));
arr = [1, -1, -1, 1, -1, 1];
console.log(longestSubarrayWhoseSumIsEqualTo0(arr));
arr = [1, 1, 1, 1, 1, 1, 1 , 1 , -1, -1];
console.log(longestSubarrayWhoseSumIsEqualTo0(arr));
arr = [1, 1, 1, 1, 1, 1, 1];
console.log(longestSubarrayWhoseSumIsEqualTo0(arr));
arr = [-1, -1, -1, -1, -1, -1, -1];
console.log(longestSubarrayWhoseSumIsEqualTo0(arr));



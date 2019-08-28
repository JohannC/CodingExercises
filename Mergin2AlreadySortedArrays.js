function merge(tabA, tabB) {
    iA = tabA.length - 1; //-1
    iB = tabB.length - 1; //-1
    iMerged = iA + iB + 1; //-1
    while (iMerged >= 0){
        if(iA >= 0 && tabA[iA] >= tabB[iB]){
            tabA[iMerged] = tabA[iA];
            --iMerged; --iA;
        } else {
            tabA[iMerged] = tabB[iB];
            --iMerged; --iB;
        }
    }
    return tabA;
}

console.log(merge([4,6,9,59,78,89], [9,14,52,87,96,110]))

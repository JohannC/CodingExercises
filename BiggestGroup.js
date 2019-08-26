/* User input
[[1,1,1,3,2],
 [1,2,3,2,1]
 [1,1,3,1,2]
 [4,2,1,2,4]]
 Compute the biggest group of neighboring numbers that are equal
 => 5
*/

let matrix = [[1,1,1,3,2],[1,2,3,2,1],[1,1,3,1,2],[4,2,1,2,4]];
console.log(computeBiggestGroupSize(matrix));

function computeBiggestGroupSize(matrix){
    let visitedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        visitedMatrix[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            visitedMatrix[i][j] = false;
        }        
    } 
    //time O(n) space O(n)
    let biggetGroupSize = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(!visitedMatrix[i][j]){
                let groupeSize = countGroup(i, j, matrix, visitedMatrix);
                biggetGroupSize = (biggetGroupSize > groupeSize) ? biggetGroupSize : groupeSize;
            }
        }        
    }
    //time O(n)
    return biggetGroupSize;
}

function countGroup(i, j, matrix, visitedMatrix){
    let groupeSize = 1;
    visitedMatrix[i][j] = true;
    //north
    if (i-1 >= 0 && !visitedMatrix[i-1][j] && matrix[i][j] === matrix[i-1][j]){
        groupeSize+= countGroup(i-1,j, matrix, visitedMatrix)
    }
    //south
    if (i+1 < visitedMatrix.length && !visitedMatrix[i+1][j] && matrix[i][j] === matrix[i+1][j]){
        groupeSize+= countGroup(i+1,j, matrix, visitedMatrix)
    }
    //west
    if (j-1 >= 0 && !visitedMatrix[i][j-1] && matrix[i][j] === matrix[i][j-1]){
        groupeSize+= countGroup(i,j-1, matrix, visitedMatrix)
    }
    //east
    if (j+1 <= visitedMatrix[i].length && !visitedMatrix[i][j+1] && matrix[i][j] === matrix[i][j+1]){
        groupeSize+= countGroup(i,j+1, matrix, visitedMatrix)
    }
    return groupeSize;
}

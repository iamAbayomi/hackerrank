function diagonalDiff(arr){
    let leftDiagonal = 0, rigthDiagonal =0
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i==j){
                leftDiagonal += arr[i][j]
            }else if(j== i ){
                rigthDiagonal += arr[i][j]
            }
        }
    }
}


export function rightDiagonalDiff(arr){
    let leftDiagSum = 0;
    let rightDiagSum = 0;
    for (let i = 0; i < arr.length; i++) {
        leftDiagSum += arr[i][i];
        rightDiagSum += arr[i][arr[i].length - (i + 1)];
    }
    let sum = Math.abs(leftDiagSum - rightDiagSum);
    return sum;
}




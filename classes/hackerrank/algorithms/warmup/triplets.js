console.log("I am working")

function compareTriplets(array1, array2){
    let result = [0,0]
    for(i=0; i<3; i++){
        if(array1[i]> array2[i]){
            result[0] +=1
        }else if(array1[i] < array2[i]){
            result[1] += 1
        }
    }
    return result
}

console.log("Result of the compareTriplets Function ", 
    compareTriplets([1,2,3], [3,2,1]))
function plusMinus(arr) {
    // Write your code here
    let temp = [0,0,0]
    for(let i =0; i< arr.length; i++){
        if(Math.sign(arr[i]) == 1){
            temp[0] +=1
        }else if(Math.sign(arr[i]) == -1){
            temp[1] +=1
        } else if(Math.sign(arr[i]) ==0){
            temp[2] +=1
        }
    }
    console.log(temp[0]/arr.length)
    console.log(temp[1]/arr.length)
    console.log(temp[2]/arr.length)
   
}
export function staircasse(num){
    const temp = []
    for(let i=0; i<num; i++){
       // for(let j=0; j<i; j++){
            temp.push("#")
            console.log(temp.join(""))
        //}
    }

}



export function staircase(num){
    let temp =[]
    for(let k=0; k< num; k++){
        temp[k] = new Array(num)
    }

    for(let k=0; k< num; k++){
        for(let l=0; l<num; l++){
            temp[k][l]= ""
        }
    }
    // console.log(temp)
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            if(j< Math.abs(num-1)-i){
                temp[i][j] = " "
            }else{
                temp[i][j]= "#"
            }
            
        }
        console.log(temp.join(" "))
        // console.log(temp)
    }
    console.log(temp)
    // for(let i=0; i<num; i++){
    //     for(let j=0; j<num; j++){
    //     console.log(temp.join(" "))
    //     }
    //     console.log("")
    // }
}
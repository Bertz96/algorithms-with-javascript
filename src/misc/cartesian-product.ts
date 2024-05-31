function cartesianProduct(firstArr : number[], secondArr : number[]){
    const resultSet = []

    for(let i = 0; i < firstArr.length ; i++){
        for(let j = 0; j < secondArr.length ; j++){
            resultSet.push([firstArr[i], secondArr[j]])
        }
    }

    return resultSet
}
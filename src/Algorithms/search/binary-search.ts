function binarySearch(arr : any[], target : any){
    if(arr.length < 1){
        return 'Please provide a valid array.'
    }

    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if(target === arr[middleIndex]){
            return middleIndex
        }

        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }

    }

    return -1
}

//el Array debe estar ordenado

//Big-O   O(Log n)
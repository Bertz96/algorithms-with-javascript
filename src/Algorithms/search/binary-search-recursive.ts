function binarySearchRecursive(arr: any[], target: any) {
    
    return search(arr, target, 0, arr.length - 1)

}

function search(arr: any[], target: any, leftIndex: number, rigthIndex: number){
    if(leftIndex > rigthIndex){
        return -1
    }
    
    let middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
    
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
       return search(arr, target, leftIndex, middleIndex - 1)
    } else {
       return search(arr, target, middleIndex - 1, rigthIndex)
    }
    
}

//El Array debe estar ordenado
// Big-O    O(log n)
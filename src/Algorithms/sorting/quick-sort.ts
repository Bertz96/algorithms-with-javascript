function quickSort(arr : any[]){
    
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length - 1]
    let leftArr = []
    let rightArr = []

    for(let i = 0; i < arr.length - 1; i ++){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        } else { 
            rightArr.push(arr[i])
        }
    }

    return [...leftArr, pivot, ...rightArr]

}

/** El pivot puede ser:
 * - El primer elemento
 * - El ultimo elemento
 * - El elemento del medio
 * - un elemento random
 */

// si esta rdenado el peor de los casos es  Big-O  -- O(n^2)

// Average Big-O   O(n log n)
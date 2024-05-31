function bubbleSort(arr: any[]){
    let swapped = true

    do{
        swapped = false
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i  + 1]){
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }while(swapped)
}

// Recorremos el array por lo menos una vez
// Si se intercambia algun elemento se recorre nuevamente el array

// Big-O -- O(n^2)


const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr);
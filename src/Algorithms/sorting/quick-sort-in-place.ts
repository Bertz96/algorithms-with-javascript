function quickSort(arr : any[], left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivot = partition(arr, left, right)
      quickSort(arr, left, pivot - 1)
      quickSort(arr, pivot + 1, right)
    }
    return arr
  }
  
  function partition(arr : any[], left : number, right:number) {
    const pivot = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        swap(arr, i, j)
        i++
      }
    }
    swap(arr, i, right)
    return i
  }
  
  function swap(arr : any[], i : number, j:number) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
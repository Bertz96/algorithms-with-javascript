function linearSearch(arr : any[], target: unknown){
    if(arr.length < 1){
        return 'Please introduce a valid array.'
    }

    for(let i = 0; i< arr.length; i++){
        if(arr[i] === target)
            return i
    }
    
    return -1
}

//Big-O   O(n)
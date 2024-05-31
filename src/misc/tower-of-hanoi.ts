function towerOfHanoi(n : number, fromRod : string, toRod: string, usingRod: string){
    if(n === 1){
        console.log(`Moving from ${fromRod} to ${toRod}`);
        return
    }

    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Moving disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'A', 'C', 'B')
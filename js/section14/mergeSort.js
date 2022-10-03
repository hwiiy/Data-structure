function mergeSort(arr1, arr2){
    let res = [];
    let i = 0; //arr1 의 인덱스
    let j = 0; // arr2의 인덱스

    while(i<arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i])
            i++
        }else{
            res.push(arr2[j])
            j++
        }
    }

    while (i<arr1.length){
        res.push(arr1[i])
        i++
    }
    while (j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res;
}

console.log(mergeSort([1,2,4,6],[3,5,7,9,10]))
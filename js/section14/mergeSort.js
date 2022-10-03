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

function recursionMerge(arr){
    if (arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = recursionMerge(arr.slice(0,mid))
    let right = recursionMerge(arr.slice(mid))
    return mergeSort(left,right)
}

console.log(recursionMerge([1,5,6,3,9,7,4]));
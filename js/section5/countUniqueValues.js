function countUniqueValues(arr){

    //빈 배열일 경우
    if(arr.length ===0) return 0;

    var i = 0;
    for(var j=1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}


console.log(countUniqueValues([1,1,1,1,2])) //2
console.log(countUniqueValues([])) //0
console.log(countUniqueValues([1,3,4,5,5,6,6,9])) //6
console.log(countUniqueValues([-2,-1,-1,0,1])) //4


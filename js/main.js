function same (arr1, arr2){

    // step1. arr1 과 arr2 문자열 길이가 다르다면 false 반환
    if(arr1.length !== arr2.length){
        return false
    }

    // step2. 빈 객체 생성 

    let counterArr1 = {}
    let counterArr2 = {}

    for(let val of arr1){
        counterArr1[val] =(counterArr1[val]|| 0)+1
    }

//  기존에 존재하면 1증가, 존재 하지 않았다면 1로 설정해줌

    for(let val of arr2){
        counterArr2[val] = (counterArr2[val] || 0 )+1
    }


    for(key in counterArr1){
        if(!(key**2 in counterArr2)){
            return false
        } 
        if(counterArr1[key] !== counterArr2[key **2]) //2가 2개면 4도 2개여야 함 !! 갯수 확인!, array1 기준으로 2(key) 이면 array2기준으로는 4(key**2)가 되니까@
        return false
    }
    return true

}

console.log(same([1,2,3,4],[1,4,16,25]))

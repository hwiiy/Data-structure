
var cnt =0;

function searchString(long,short){
    for(var i =0;i<long.length;i++){
        for(var j=0;j<short.length;j++){
           if(short[j]!==long[i+j]) break;

           if(j === short.length-1) cnt++;
        }
    }
return cnt
}


console.log(searchString("mynameish whatisyourname?","name"))
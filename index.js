function mergeSort(arr){

    if(arr.length === 1 ){
return arr}
const mid = Math.floor(arr.length/2)
const left = arr.slice(0,mid)
const right = arr.slice(mid, arr.length)
return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right){
    let i = 0, j = 0
    const result = []
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i])
         i++
        }
        else{
            result.push(right[j])
         j++  
        }
    }
   while(i<left.length){
     result.push(left[i])
     i++
    } 
   while(j<right.length){
    result.push(right[j])
    j++
   }
return result
}


console.log(mergeSort([2,6,3,7,3,5,4,2]))
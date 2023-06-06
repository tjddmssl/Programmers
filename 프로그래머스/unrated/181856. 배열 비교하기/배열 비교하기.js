function solution(arr1, arr2) {
  //arr1과 arr2길이 비교 1, -1 , 0
  //길이가 같다면 배열의 원소의 합을 비교해서 더 큰게 길다.
  if(arr1.length > arr2.length){
    return 1
  }else if(arr1.length < arr2.length){
    return -1
  } 
  let arrSum1 = arr1.reduce((a,b)=> a+b)
  let arrSum2 = arr2.reduce((a,b)=>a+b)

  if(arrSum1 > arrSum2){
    return 1
  }else if(arrSum1 < arrSum2){
    return -1
  }

  return 0
}
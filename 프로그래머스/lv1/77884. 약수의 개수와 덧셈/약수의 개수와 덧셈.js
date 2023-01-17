function solution(left, right) {
  var answer = 0;
 for(let i =left; i <= right; i++){
  let s=1
  for(let j=2; j<=i; j++ ){
    if(i%j ===0 ) s++
  }
  if(s%2 ===0 ) answer = answer+ i;
  else answer = answer - i
 } 
 return answer
}
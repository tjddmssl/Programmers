function solution(k, score) {
let honor=[];
let answer=[];
score.forEach((el) => {
  honor.push(el)
  honor.sort((a,b)=>b-a)
  honor.length>=k ? answer.push(honor[k-1]) : answer.push(honor[honor.length -1])
});
return answer
}
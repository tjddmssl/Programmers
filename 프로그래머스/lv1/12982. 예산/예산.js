function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let c of d) {
    if (c > budget) {
      break;
    }
    budget -= c;
    answer++;
  }
  return answer;
}
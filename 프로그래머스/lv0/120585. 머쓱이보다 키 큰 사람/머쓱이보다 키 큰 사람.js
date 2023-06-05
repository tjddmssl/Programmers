function solution(array, height) {
  var answer = 0;
  answer = array.filter(i => i > height )
  return answer.length;
}
function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        return answer = "Even"
    } else {
        return answer = "Odd"
    }
    return answer;
}
// 삼항연산자를 이용한 풀이
function solution(num) {
    return (num % 2 === 0? "Even":"Odd")
}
// num을 2로 나눈 나머지가 0이면(true) Even을 반환하고, 그렇지 않으면(false) Odd를 반환해라.
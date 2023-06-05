function solution(num) {
    //오름차순
    //배열 앞에서부터 다섯개 자르기
    num.sort((a,b)=> a-b)
    let answer = num.slice(0,5)
    return answer
}